// @ts-check
import { defineConfig } from 'astro/config';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { config } from './src/config.ts';

// Finche' config.anteprima e' true, Netlify manda "X-Robots-Tag: noindex, nofollow" su tutte le pagine
// (oltre al meta robots e al robots.txt). Il file _headers nasce dallo stesso interruttore: al lancio basta mettere
// anteprima a false in src/config.ts, senza toccare netlify.toml.
const intestazioniAnteprima = {
  name: 'goklient-intestazioni-anteprima',
  hooks: {
    /** @param {{ dir: URL }} opts */
    'astro:build:done': ({ dir }) => {
      if (!config.anteprima) return;
      writeFileSync(fileURLToPath(new URL('_headers', dir)), '/*\n  X-Robots-Tag: noindex, nofollow\n');
    },
  },
};

// Indirizzi senza barra finale: /privacy, /elimina-account, /condizioni
// sono gia' comunicati a Google Play e non devono cambiare.
export default defineConfig({
  site: 'https://goklient.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [intestazioniAnteprima],
});
