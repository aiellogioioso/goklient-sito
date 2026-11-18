// Mappa del sito per Google: le pagine fisse e le 25 pagine dei mestieri, senza la 404.
// robots.txt la indica solo quando config.anteprima e' false (al lancio su goklient.app).
import type { APIRoute } from 'astro';
import { mestieri } from '../data/mestieri';

const pagine = [
  '/',
  '/come-funziona',
  '/mestieri',
  '/prezzi',
  '/scarica',
  '/domande-frequenti',
  '/assistenza',
  '/privacy',
  '/condizioni',
  '/elimina-account',
  ...mestieri.map((m) => `/mestieri/${m.slug}`),
];

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => `  <url><loc>${new URL(p, site).href.replace(/\/$/, p === '/' ? '/' : '')}</loc></url>`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pagine.map(url).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
