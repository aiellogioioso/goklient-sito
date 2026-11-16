// robots.txt generato in base all'interruttore config.anteprima.
import type { APIRoute } from 'astro';
import { config } from '../config';

export const GET: APIRoute = ({ site }) => {
  const body = config.anteprima
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
