import { type NextRequest, NextResponse } from 'next/server';

const CANONICAL_ORIGIN = 'https://insidesalesassistant.com';
const APEX_HOST = 'insidesalesassistant.com';
const WWW_HOST = 'www.insidesalesassistant.com';

function firstHeaderValue(value: string | null) {
  return value?.split(',', 1)[0]?.trim().toLowerCase() ?? '';
}

function originalProtocol(request: NextRequest) {
  const cloudflareVisitor = request.headers.get('cf-visitor');
  if (cloudflareVisitor) {
    try {
      const visitor = JSON.parse(cloudflareVisitor) as { scheme?: unknown };
      if (visitor.scheme === 'https' || visitor.scheme === 'http') return visitor.scheme;
    } catch {
      // Malformed edge metadata falls through to the bounded proxy fallback.
    }
  }

  const forwardedProtocol = firstHeaderValue(request.headers.get('x-forwarded-proto'));
  if (forwardedProtocol === 'https' || forwardedProtocol === 'http') return forwardedProtocol;

  return request.nextUrl.protocol.replace(':', '').toLowerCase();
}

export function proxy(request: NextRequest) {
  const host = firstHeaderValue(request.headers.get('host')).split(':', 1)[0];
  const protocol = originalProtocol(request);
  const needsCanonicalHost = host === WWW_HOST;
  const needsHttps = host === APEX_HOST && protocol !== 'https';

  if (!needsCanonicalHost && !needsHttps) return NextResponse.next();

  const destination = new URL(CANONICAL_ORIGIN);
  destination.pathname = request.nextUrl.pathname;
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/:path*',
};
