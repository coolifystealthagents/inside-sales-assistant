import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'inside-sales-assistant';
const MAX_BODY_BYTES = 256_000;
const MAX_EVENTS_PER_BATCH = 100;

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const requestHost = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
      .split(',')[0]
      .trim()
      .toLowerCase();
    const originHeader = request.headers.get('origin');
    if (!originHeader || !requestHost) {
      return Response.json({ status: 'error', detail: 'Origin required' }, { status: 403 });
    }

    let origin: URL;
    try {
      origin = new URL(originHeader);
    } catch {
      return Response.json({ status: 'error', detail: 'Invalid origin' }, { status: 403 });
    }
    if (origin.host.toLowerCase() !== requestHost) {
      return Response.json({ status: 'error', detail: 'Origin not allowed' }, { status: 403 });
    }

    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return Response.json({ status: 'error', detail: 'JSON required' }, { status: 415 });
    }

    const declaredLength = Number(request.headers.get('content-length') || '0');
    if (declaredLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }

    let payload: { site_id?: unknown; events?: unknown };
    try {
      payload = JSON.parse(body);
    } catch {
      return Response.json({ status: 'error', detail: 'Invalid JSON' }, { status: 400 });
    }
    if (payload.site_id !== SITE_ID || !Array.isArray(payload.events) || payload.events.length < 1 || payload.events.length > MAX_EVENTS_PER_BATCH || payload.events.some((event) => !event || typeof event !== 'object')) {
      return Response.json({ status: 'error', detail: 'Invalid tracking batch' }, { status: 400 });
    }

    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
