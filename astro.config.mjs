// @ts-check
import { defineConfig } from 'astro/config';

// Indirizzi senza barra finale: /privacy, /elimina-account, /condizioni
// sono gia' comunicati a Google Play e non devono cambiare.
export default defineConfig({
  site: 'https://goklient.app',
  trailingSlash: 'never',
  build: { format: 'file' },
});
