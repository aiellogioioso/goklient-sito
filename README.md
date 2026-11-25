# Sito goKlient – prototipo

Sito statico fatto con [Astro](https://astro.build). I testi vengono dal brief di Eugenio
(`../goKlient_Brief_Sito_Giovanni.docx`, versione del 02/11/2026).

## Come si usa

```bash
npm install        # la prima volta
npm run dev        # anteprima su http://localhost:4321
npm run build      # sito finito nella cartella dist/
```

La cartella è su iCloud: `node_modules`, `dist` e `.astro` sono esclusi dalla sincronizzazione con un attributo
di sistema (il trucco del collegamento `.nosync` non ha retto: iCloud lo ha sostituito con una cartella vera).
Su un altro Mac, prima di `npm install`:

```bash
for d in node_modules dist .astro; do mkdir -p $d && xattr -w 'com.apple.fileprovider.ignore#P' 1 $d; done
```

## Dove sono le cose

| Che cosa | Dove |
| --- | --- |
| Interruttori (Windows, Google Play, manuale, dati società, prezzi, motto, email) | `src/config.ts` |
| Colori, caratteri, classi comuni | `src/styles/global.css` |
| Intestazione, piè di pagina, blocco "Hai una domanda?" | `src/components/`, `src/layouts/Base.astro` |
| I 25 mestieri (testi, esempi dall'app, titoli per Google) | `src/data/mestieri.ts` |
| Le domande frequenti | `src/data/faq.ts` |
| Pagine | `src/pages/` (una pagina modello `mestieri/[slug].astro` genera le 25 pagine di settore) |
| Immagini | `public/img/` |

Indirizzi fissi già dati a Google Play, da non cambiare: `/privacy`, `/elimina-account`, `/condizioni`.

## Anteprima e lancio

- Finché `config.anteprima` è `true` nessuna pagina va su Google: meta robots `noindex` in ogni pagina, `robots.txt`
  che blocca tutto e, scritto dalla build, il file `dist/_headers` con `X-Robots-Tag: noindex, nofollow`
  (vedi `astro.config.mjs`). Sulle anteprime delle PR Netlify aggiunge anche un suo `noindex`.
- **Al lancio su goklient.app** basta mettere `anteprima: false` in `src/config.ts`: spariscono il `noindex` e il file
  `_headers`, e `robots.txt` indica la mappa del sito `sitemap.xml` (generata da `src/pages/sitemap.xml.ts`).
  Poi controllare con `curl -I https://goklient.app/` che non ci sia `X-Robots-Tag` e inviare la sitemap a Google
  Search Console.
- Il pulsante "Scarica goKlient per Android" compare da solo quando il file indicato in `config.apk.url`
  (oggi `/scarica/goklient.apk`) esiste in `public/`. Finché manca, al suo posto c'è un segnaposto.
- Cache (`netlify.toml`): `/_astro/*` per un anno, perché i nomi hanno l'impronta; `/img/*` per un giorno. Chi
  sostituisce un'immagine tenendo lo stesso nome la vede aggiornata entro un giorno: per vederla subito, cambiare nome.
- `public/og.png` è l'immagine che compare quando si condivide un link (WhatsApp, Facebook): 1200×630.

## Regole dei testi (dal brief)

- I testi del brief si possono **accorciare**, ma non si aggiungono funzioni, numeri o promesse che non ci sono.
- La parola **"errore"** non si usa mai. La parola **"CRM"** solo nel `title` e nella `description` delle pagine.
- I concorrenti non si nominano. Nessun numero di utenti, nessuna recensione inventata.
- Windows: sempre "Arriverà presto anche la versione per Windows", senza data. Usare `config.windowsDisponibile`
  e `testoWindows` / `rigaRequisiti` da `src/config.ts`, mai il testo scritto a mano.
- Cloud: **non** scrivere che i dati sono "cifrati con la tua chiave" o "cifrati sull'apparecchio prima dell'invio".
- Telefono prima di tutto: in alto il testo "Breve", sotto i dettagli ("Completo"). Caratteri grandi, pulsanti larghi.
- Un'azione principale per pagina: **Scarica goKlient** (porta a `/scarica`).
- Le parti tra parentesi quadre del brief ([...]) sono segnaposto: si mostrano con la classe `.placeholder`.

## Componenti

- `Base.astro` – layout: `<Base title="..." description="...">`. Aggiunge da solo intestazione, blocco finale e piè di pagina.
- `PhoneFrame.astro` – cornice neutra per una schermata: `<PhoneFrame src="/img/schermate/p2-evento-preventivo.webp" alt="..." width={720} height={1407} />`.
- `DownloadButtons.astro` – pulsante Scarica (APK oggi, Google Play domani) + riga dei requisiti. Prop `secondary={{href, label}}`.
- `Icon.astro` – icone a linea: clienti, scadenze, ordini, preventivi, email, offline, sync, lucchetto, copia, telefono,
  tablet, computer, scarica, aiuto, testo, mestiere, demo, freccia, spunta, libro, video, persona, cestino.
- `Logo.astro` – logo orizzontale provvisorio (icona + scritta).

Classi CSS comuni (in `global.css`): `container`, `container--narrow`, `section`, `section--tight`, `section--alt`,
`section--brand`, `section-head`, `section-head--center`, `eyebrow`, `lead`, `muted`, `small`, `grid grid-2|grid-3|grid-4`,
`split`, `split--reverse`, `stack`, `card`, `icon-dot`, `note`, `badge`, `checks`, `crosses`, `btn btn--primary|btn--ghost|btn--small`,
`btn-row`, `faq` (con `<details><summary>…</summary><div>…</div></details>`), `table-wrap`, `placeholder`.

## Immagini disponibili (`public/img/`)

Schermate (`schermate/`, 720 px di larghezza, barra di stato già tolta):

| File | Altezza | Che cosa mostra | Stato |
| --- | --- | --- | --- |
| `p1-mia-azienda.webp` | 1407 | Altro > La mia azienda (parte bassa: IVA, frase, condizioni) | definitiva |
| `p2-evento-preventivo.webp` | 1407 | Evento con 2 prodotti, pulsanti "Prodotto +" e "Preventivo" | definitiva |
| `p3-foglio-bozza.webp` | 1407 | Preventivo in bozza con intestazione dell'azienda inventata | definitiva |
| `p4-preventivo-numerato.webp` | 1407 | Preventivo numerato 2026/021 | definitiva |
| `p4b-revisione.webp` | 1407 | Revisione con la lettera (2026/017a) | definitiva |
| `p5-elenco-preventivi.webp` | 1065 | Altro > Preventivi | definitiva |
| `p6-contatti-badge.webp` | 771 | Lista contatti con le "P" | definitiva |
| `f16-esportazione.webp` | 1407 | Gestione archivi > Esportazione | definitiva |
| `f16b-avviso-copia.webp` | 1407 | Avviso "portala anche fuori" | definitiva |
| `e1-elimina-account.webp` | 528 | Comando "Elimina account goKlient" (solo la scheda, senza cornice) | definitiva |
| `h1-home-provvisoria.webp` | 1488 | Home chiara | PROVVISORIA (versione con R, numeri di prova) |
| `h13-home-scura-provvisoria.webp` | 1488 | Home scura | PROVVISORIA |
| `f1-scelta-tipologia.webp` | 1488 | "Scegli i tuoi tipi" | provvisoria pulita |
| `f1-scelta-mestieri.webp` | 1488 | Scelta del mestiere | provvisoria pulita |
| `f12-destinatari.webp` | 1488 | Email, passo 1: i quattro modi di scegliere i destinatari | provvisoria pulita |
| `f6-importazione.webp` | 1488 | Importazione (rubrica, Excel, biglietto) | provvisoria pulita |
| `f20-aspetto.webp` | 1488 | Menu dell'aspetto (tre tinte) | provvisoria pulita |
| `azzera-archivi.webp` | 1488 | Azzera archivi | provvisoria pulita |
| `f4-citta-estera.webp` | 1336 | Città estera compilata da sola | provvisoria pulita |
| `h8-demo-25-mestieri.webp` | 1488 | Dimostrazione: griglia dei mestieri | provvisoria pulita |
| `h12-demo-due-mestieri.webp` | 1488 | Dimostrazione: due mestieri scelti | provvisoria pulita |

Mestieri: `mestieri/<chiave>.svg` (stemma del mestiere, 25, per le tessere) e, come immagine di apertura di ogni
pagina di mestiere, la lettera vera della demo `lettere/<chiave>.webp` (1000×1395, 25, con la foto del mestiere
dentro; decisione di Eugenio del 19/11/2026). Le lettere le prepara la sessione dell'app (repository dell'app,
`_docs/_img_settori/lettere_sito/`, script `_docs/gen_lettere_sito.py`). Crediti delle foto in
[CREDITI_FOTO.md](CREDITI_FOTO.md). I disegni `scene/<chiave>.svg` restano come ripiego. Chiavi: agente, aceto, agri, auto, birra,
caffe, ceramica, conserve, distilleria, dolci, elettricisti, erbe, fiori, formaggi, impianti, legno, miele, olio, pesca,
salumi, sport, stampa, verde, vino, vivai.

Foto e loghi della cantina Cecchini (`../goKlient_immagini_per_Giovanni/1_marchio/`): autorizzati (Marco Cecchini è
di famiglia), ma sono piccoli e tutti sul vino: semmai solo nella pagina del vino o come futura testimonianza.

**Non usare**: foto senza una riga in [CREDITI_FOTO.md](CREDITI_FOTO.md) con il link alla fonte aperto e la licenza gratuita verificata (non Unsplash+); le schermate con email o dati che sembrano veri.

## Ancora da fare prima della pubblicazione

Vedi il documento "Sito goKlient: domande per Eugenio": pagine legali, dati della società, prezzo annuale,
schermate da rifare (Home, contatti, scadenziario, passi di installazione), logo definitivo, immagine di condivisione.
