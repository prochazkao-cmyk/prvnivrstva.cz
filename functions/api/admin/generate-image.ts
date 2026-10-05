type Env = {
  OPENROUTER_API_KEY?: string;
  ADMIN_ACCESS_TOKEN?: string;
};

const allowedModels = new Set([
  'recraft/recraft-v4.1-vector',
  'recraft/recraft-v4.1-flash',
  'openai/gpt-image-2',
]);

export const onRequestPost = async (context: any) => {
  const env = context.env as Env;
  const request = context.request as Request;

  if (!env.OPENROUTER_API_KEY || !env.ADMIN_ACCESS_TOKEN) {
    return Response.json({ error: 'Admin není nakonfigurovaný.' }, { status: 503 });
  }

  const accessToken = request.headers.get('x-admin-token');
  if (!accessToken || accessToken !== env.ADMIN_ACCESS_TOKEN) {
    return Response.json({ error: 'Neplatný admin token.' }, { status: 401 });
  }

  let payload: { prompt?: string; model?: string; aspectRatio?: string };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Neplatná data požadavku.' }, { status: 400 });
  }

  const prompt = payload.prompt?.trim();
  const model = payload.model || 'recraft/recraft-v4.1-vector';
  if (!prompt || prompt.length < 20 || prompt.length > 4000) {
    return Response.json({ error: 'Prompt musí mít 20 až 4000 znaků.' }, { status: 400 });
  }
  if (!allowedModels.has(model)) {
    return Response.json({ error: 'Tento model není povolený.' }, { status: 400 });
  }

  const openRouterResponse = await fetch('https://openrouter.ai/api/v1/images', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://prvnivrstva.cz',
      'X-Title': 'První Vrstva Admin',
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      aspect_ratio: payload.aspectRatio || '16:9',
      output_format: model.includes('vector') ? 'svg' : 'png',
      quality: model === 'openai/gpt-image-2' ? 'high' : undefined,
    }),
  });

  const result = await openRouterResponse.json() as any;
  if (!openRouterResponse.ok || !result.data?.[0]?.b64_json) {
    return Response.json({ error: result.error?.message || 'Generování obrázku selhalo.' }, { status: 502 });
  }

  const mediaType = result.data[0].media_type || (model.includes('vector') ? 'image/svg+xml' : 'image/png');
  return Response.json({
    dataUrl: `data:${mediaType};base64,${result.data[0].b64_json}`,
    mediaType,
    model,
    usage: result.usage?.cost ? { cost: result.usage.cost } : undefined,
  });
};
