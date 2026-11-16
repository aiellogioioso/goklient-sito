# Sito goKlient – istruzioni per Claude

Sito vetrina di goKlient, app Android per artigiani, piccoli produttori, negozi e agenti di commercio.
Sito statico Astro: struttura, componenti, classi CSS e immagini sono descritti nel [README](README.md). Leggilo prima di modificare le pagine.

Rispondi e scrivi in italiano. Chi lavora qui: Giovanni (proprietario del sito) ed Eugenio (autore dell'app).

## Come si lavora

- **Mai modifiche dirette su `main`**: Netlify pubblica `main` su goklient-anteprima.netlify.app. Ogni modifica va su un
  ramo nuovo e arriva come pull request. Netlify crea l'anteprima della PR e Giovanni decide se unirla.
- Una PR per argomento (per esempio "nuova prima schermata", "4 apparecchi"), con una descrizione in italiano semplice
  di che cosa cambia e dove guardarlo nell'anteprima.
- Prima di aprire la PR: `npm run build` deve finire senza errori, e le pagine toccate vanno guardate a 375 px di
  larghezza (niente scorrimento orizzontale) e su computer.
- Non cambiare gli indirizzi già dati a Google Play: `/privacy`, `/elimina-account`, `/condizioni`. Gli indirizzi delle
  25 pagine dei mestieri (`/mestieri/<slug>`) sono quelli della sezione 10 del brief.
- `src/config.ts` contiene gli interruttori (Windows, Google Play, manuale, video, testimonianze, dati della società,
  prezzi, motto, `anteprima`). Si cambia un valore lì, non il testo nelle pagine. `anteprima` resta `true` (niente
  indicizzazione) fino al lancio vero su goklient.app, deciso da Giovanni.

## Fonti dei testi

- Il brief di Eugenio (versione del 02/11/2026) e il documento "Modifiche al sito dopo l'anteprima" del 13/11/2026.
  Dove dicono cose diverse, **vale il documento del 13/11** (la versione con la sezione 8 sul fine prova).
- I testi si possono accorciare; **non si aggiungono funzioni, numeri o promesse** che le fonti non contengono.
  Nel dubbio, chiedi invece di inventare.

## Regole dei testi

- Mai la parola **"errore"**. La parola **"CRM"** solo nel `title` e nella `description` delle pagine.
- Tono: frasi brevi, "tu", parole del mestiere e non dell'informatica. Niente "il migliore", niente concorrenti,
  nessun numero di utenti e nessuna recensione inventata.
- Windows: sempre tramite `config.windowsDisponibile`, `testoWindows`, `rigaRequisiti`. Mai scritto a mano, mai una data.
- Cloud: non scrivere che i dati sono "cifrati con la tua chiave" o "cifrati sull'apparecchio prima dell'invio".
- Mai scrivere che l'app "ti guida al rinnovo" o simili: l'abbonamento si compra e si rinnova solo dal sito.
- Telefono prima di tutto: in alto il testo breve, i dettagli sotto o dentro un `<details>`. Caratteri grandi,
  contrasto alto, pulsanti di almeno 44 px. Un'azione principale per pagina.
- I segnaposto per dati che arriveranno si mostrano con la classe `.placeholder`.

## Decisioni in vigore (documento del 13/11/2026)

- Fino a **4 apparecchi** (non 10). Account goKlient **obbligatorio e gratuito**; la dimostrazione si prova subito,
  senza account; con l'account parte la prova di 30 giorni, senza carta.
- "**Proposta d'ordine**" quando si descrive la funzione (prima la proposta d'ordine, poi il preventivo). "Ordini"
  resta solo per gli ordini veri dei clienti e per i tipi d'esempio dell'app ("Ordine in cantina").
- Il cloud è compreso nell'abbonamento. Su Google Play non si vende.
- Pagine legali e banner dei cookie: li prepara lo studio legale. Non costruire un banner, lasciargli il posto.

## Immagini e dati

- Nelle schermate solo dati della dimostrazione: nomi inventati, indirizzi `@demo.it`, aziende inventate.
  Mai email, telefoni o nomi che sembrano veri, mai barre di stato del telefono con notifiche.
- Schermate in `public/img/schermate/`, in WebP, 720 px di larghezza, con `width`, `height` e un testo alternativo che
  descrive che cosa si vede.
- Foto: solo quelle con licenza verificata. I link Unsplash segnati come non verificabili non si usano.

## Mac di Giovanni (cartella su iCloud)

`node_modules`, `dist`, `.astro` e `.git` sono esclusi da iCloud con l'attributo `com.apple.fileprovider.ignore#P`.
Non sostituirli con collegamenti `.nosync`: iCloud li rompe. Il comando è nel README.
