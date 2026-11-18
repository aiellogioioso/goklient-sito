// Interruttori del sito: si cambiano qui, senza riscrivere le pagine.
// Ogni pagina legge questi valori per decidere cosa mostrare.

export const config = {
  /** Anteprima: true = nessuna pagina indicizzata da Google (noindex + robots.txt che blocca tutto).
   *  Da mettere a false SOLO al lancio vero su goklient.app. */
  anteprima: true,

  /** La versione Windows e' distribuita? Finche' e' false: "Arrivera' presto anche la versione per Windows". */
  windowsDisponibile: false,

  /** L'app e' su Google Play? false = pulsante del file APK con i passi; true = badge di Google Play. */
  googlePlay: false,
  googlePlayUrl: '', // [da inserire quando l'app sara' su Google Play]

  /** File di installazione per Android (strada attuale). */
  apk: {
    url: '/scarica/goklient.apk', // [da confermare con Eugenio]
    versione: '', // es. "4.4.12" [da inserire]
    data: '', // es. "09/11/2026" [da inserire]
    sha256: '', // impronta del file [da inserire]
  },

  /** Casella di assistenza: assistenza@goklient.app e' ancora da aprire, fino ad allora info@. */
  emailAssistenza: 'info@goklient.app',
  emailInfo: 'info@goklient.app',

  /** Il manuale si pubblica solo quando il PDF e' stato ripulito (note interne, email, Windows). */
  manualePubblicato: false,
  manualeUrl: '/goKlient_Manuale_d_uso.pdf',

  /** Video: arriveranno nel tempo. */
  videoDisponibili: false,

  /** Testimonianze: Eugenio ne sta raccogliendo due, con liberatoria. Compaiono in Home e, se `chiave` e' quella di
   *  un mestiere (es. 'vino', 'impianti': vedi src/data/mestieri.ts), anche nella pagina di quel mestiere. */
  testimonianze: [] as { nome: string; mestiere: string; zona: string; frase: string; anteprima?: boolean; chiave?: string }[],

  /** Motto: brief "Vicino ai miei clienti", schermata di avvio "Vicino ai tuoi clienti" [da decidere con Eugenio]. */
  motto: 'Vicino ai miei clienti',

  /** Prezzi (decisione del 27/10/2026). L'annuale e' da ricontrollare: 10 x 9,75 = 97,50, non 98,28. */
  prezzi: {
    mensile: { imponibile: '9,75', ivato: '11,90' },
    annuale: { imponibile: '98,28', ivato: '119,90' },
    giorniProva: 30,
    apparecchi: 4, // decisione del 10/11/2026: fino a 4 apparecchi, sostituibili dall'app
  },

  /** Dati della societa' (visura del Registro delle Imprese della Venezia Giulia del 17/11/2026; nome scritto
   *  "goKlient S.R.L." su indicazione di Eugenio). Il capitale va indicato come versato (art. 2250 c.c.).
   *  null = mostra il segnaposto. */
  societa: {
    ragioneSociale: 'goKlient S.R.L.',
    sede: 'Via Borgo Nuovo 3, 34070 Capriva del Friuli (GO)',
    partitaIva: '01294300312',
    codiceFiscale: '01294300312',
    rea: 'GO\u2011218723', // trattino che non va a capo
    capitale: '€ 10.000,00 (versato € 2.500,00)',
    pec: 'goklientsrl@pec.it',
  } as null | {
    ragioneSociale: string;
    sede: string;
    partitaIva: string;
    codiceFiscale: string;
    rea: string;
    capitale: string;
    pec: string;
  },
} as const;

export const testoWindows = config.windowsDisponibile
  ? 'Disponibile anche per computer Windows.'
  : 'Arriverà presto anche la versione per Windows.';

export const rigaRequisiti = `Telefono e tablet Android 11 o successivo. ${testoWindows}`;

/** Menu principale: 5 voci + pulsante Scarica. */
export const menu = [
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/mestieri', label: 'Per il tuo mestiere' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/domande-frequenti', label: 'Domande frequenti' },
  { href: '/assistenza', label: 'Assistenza' },
];
