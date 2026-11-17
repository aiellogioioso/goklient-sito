// Domande frequenti: testi della sezione 7 del brief, parola per parola.
// Le parti che dipendono da Windows, dai prezzi e dalla casella di posta si leggono da config.ts,
// cosi' basta cambiare l'interruttore e tutte le pagine (anche la Home) si aggiornano.
import { config, testoWindows } from '../config';

export interface Faq {
  id: string;        // ancora nella pagina: /domande-frequenti#domanda-11
  numero: string;    // numero del brief: '1', '2', '2b', ...
  domanda: string;
  risposta: string;  // testo semplice (va anche nei dati strutturati per Google)
  /** Pezzi della risposta da trasformare in link (facoltativo; la pagina li rende cliccabili). */
  link?: { testo: string; href: string }[];
}

const w = config.windowsDisponibile;
const { mensile: m, annuale: a, giorniProva, apparecchi } = config.prezzi;

const faq = (numero: string, domanda: string, risposta: string, link?: Faq['link']): Faq => ({
  id: `domanda-${numero}`,
  numero,
  domanda,
  risposta,
  ...(link ? { link } : {}),
});

export const sezioniFaq: { id: string; titolo: string; domande: Faq[] }[] = [
  {
    id: 'per-iniziare',
    titolo: 'Per iniziare',
    domande: [
      faq('1', `Che cos'è goKlient?`,
        `È un'app per chi lavora in proprio: artigiani, piccoli produttori, negozi, agenti. Tieni la scheda di ogni cliente, segni eventi e scadenze, prepari le proposte d'ordine dal tuo listino, ne fai preventivi in PDF e mandi le email ai clienti, tutto in una sola app.`),
      faq('2', `Su quali apparecchi funziona?`,
        `Su telefoni e tablet Android, con Android 11 o successivo. ${testoWindows} Non c'è per iPhone, iPad e Mac.`),
      faq('2b', `Come installo goKlient sul telefono?`,
        `Dalla pagina Scarica del sito: tocchi "Scarica goKlient per Android", apri il file scaricato e, la prima volta, permetti l'installazione dal browser che stai usando. La pagina Scarica spiega i passi uno per uno; se qualcosa non torna, scrivici e ti guidiamo. Su Google Play arriverà in seguito. Alla prima apertura puoi provare subito la dimostrazione, senza account, oppure creare gratuitamente il tuo account goKlient (email e password): con l'account parte la prova gratuita di ${giorniProva} giorni.`,
        [{ testo: 'pagina Scarica', href: '/scarica' }, { testo: 'scrivici', href: '/assistenza' }]),
      faq('3', `Devo essere bravo con il computer?`,
        `No. Se sai usare il telefono, sai usare goKlient. Su molte pagine c'è un pulsante "?" che spiega che cosa puoi fare, e il manuale completo, con le figure, si apre dall'app.`),
      faq('4', `Posso provarla prima di inserire i miei clienti?`,
        `Sì, anche senza account. La prima volta che la apri scegli la dimostrazione: fino a tre mestieri, con clienti, prodotti, eventi, scadenze e lettere d'esempio. I nomi sono inventati e gli indirizzi finiscono con @demo.it. Se configuri la tua casella di posta, puoi mandare a te stesso le lettere e i documenti della dimostrazione, con foto e grafica, e vedere come arrivano a un cliente. Le modifiche fatte nella dimostrazione non restano. Quando sei pronto per i tuoi clienti, crei gratuitamente il tuo account e parte la prova di ${giorniProva} giorni.`),
      faq('5', `Ho già i clienti nella rubrica o in un foglio Excel. Devo riscriverli?`,
        `No. Puoi importarli dalla rubrica del telefono (su Android), da un file Excel o CSV, oppure da un file di testo esportato da un altro programma. Puoi anche fotografare un biglietto da visita: l'app legge nome, azienda, telefono ed email e tu confermi.`),
      faq('6', `Il mio mestiere non c'è tra i 25. Va bene lo stesso?`,
        `Sì. Scegli le tipologie standard (Cliente, Fornitore, Rivenditore, Grossista) o il mestiere più vicino, poi cambi i nomi come vuoi da Altro, Parametri della App. Rinominare si può sempre, anche quando un tipo è già usato.`,
        [{ testo: 'il mestiere più vicino', href: '/mestieri' }]),
      faq('6b', `Che cosa trovo nella dimostrazione del mio mestiere?`,
        `Clienti, prodotti, eventi e scadenze d'esempio e, per ognuno dei 25 mestieri, tre lettere già scritte per quel lavoro, con titoli, grassetti e colori, lo stemma del mestiere e una fotografia. Le apri, le modifichi e, se configuri la tua casella di posta, le mandi a te stesso per email: vedi esattamente come arriverebbero a un tuo cliente.`),
    ],
  },
  {
    id: 'dati-e-riservatezza',
    titolo: 'Dati e riservatezza',
    domande: [
      faq('7', `Dove stanno i dati dei miei clienti?`,
        `Sul tuo apparecchio, nell'archivio di goKlient. Se attivi il cloud, una copia viaggia nel tuo archivio su internet per allineare i tuoi apparecchi: è separato da quello di ogni altro utente e nessuno vede i tuoi clienti.`),
      faq('8', `Chi può vedere i miei dati?`,
        `Sul tuo apparecchio, chi lo usa. Nel cloud, chi conosce l'email e la password del tuo account goKlient: per questo vanno custodite come quelle della banca, non scritte su un foglietto in vista e non dette per telefono. Il cloud di goKlient sta su server Microsoft Azure in Italia, con un archivio separato per ogni utente, e i dati viaggiano su una connessione protetta. Il personale di goKlient accede al cloud solo per la manutenzione del servizio: non consulta i tuoi dati e non li trasmette a nessuno.`),
      faq('9', `L'app manda dati a voi?`,
        `I dati dei tuoi clienti no, a meno che tu non attivi il cloud. Ci arrivano l'email del tuo account e, per ogni apparecchio che usi, marca, modello, versione dell'app e data dell'ultimo uso: servono per la licenza e per il limite di ${apparecchi} apparecchi. Quando l'app si blocca, ci arriva in automatico una segnalazione tecnica (che cosa si è bloccato, versione dell'app, modello dell'apparecchio), senza dati dei tuoi clienti. Se usi "Segnala via email", sei tu a mandarci il messaggio. goKlient non mostra pubblicità.`),
      faq('10', `Come gestisco il consenso privacy dei miei clienti?`,
        `Il cliente può firmare il consenso a dito sullo schermo, dopo aver letto l'informativa: l'app salva la firma e la data. Puoi anche mandare per email la richiesta di consenso, con un testo già pronto che completi con i tuoi dati. Chi non vuole più ricevere email viene escluso da solo dagli invii di gruppo. Ricorda: verso i tuoi clienti il titolare del trattamento sei tu. Il testo dell'informativa che mandi va completato con i tuoi dati.`),
    ],
  },
  {
    id: 'senza-rete',
    titolo: 'Senza rete',
    domande: [
      faq('11', `Funziona senza internet?`,
        `Sì. Inserisci clienti, eventi e proposte d'ordine come sempre: tutto resta salvato sull'apparecchio. Le modifiche restano in coda anche se chiudi l'app o spegni il telefono, e partono da sole quando torna la connessione e goKlient è aperta sullo schermo. Serve solo un collegamento almeno una volta ogni 14 giorni, perché goKlient controlli l'abbonamento: se passano più giorni, te lo chiede.`),
      faq('12', `Che cosa non posso fare senza rete?`,
        `Tutto ciò che passa da internet: spedire le email, cercare nella casella di posta, configurare la casella e allineare i dati con gli altri apparecchi. Lo fai quando torna la rete.`),
    ],
  },
  {
    id: 'copie-di-sicurezza',
    titolo: 'Copie di sicurezza',
    domande: [
      faq('13', `Come faccio una copia di sicurezza?`,
        `Da Altro, Gestione archivi, Esportazione, "Data Base + foto + firme": scrivi un nome e l'app crea un file unico con clienti, eventi, ordini, listino, email, gruppi, impostazioni, foto e firme. Il file va nella cartella Download/goKlient del telefono ed è cifrato: si apre solo con goKlient. Dopo ogni copia goKlient ti ricorda di portarla anche fuori dal telefono: su una chiavetta, sul computer, in una email a te stesso.`),
      faq('14', `C'è qualcosa che la copia non contiene?`,
        `Sì, due cose. I documenti delle cartelle Template e Documenti (le lettere in formato Word): si salvano a parte, sempre da Esportazione. E la password della tua casella di posta, che per sicurezza resta solo sull'apparecchio.`),
      faq('15', `Il cloud non basta come copia di sicurezza?`,
        `Aiuta molto, ma non sostituisce la copia su file. Il cloud è uno specchio dell'ultima versione: se cancelli qualcosa per sbaglio, la cancellazione arriva anche lì e sugli altri apparecchi. La copia su file resta la tua rete di sicurezza. Con il cloud attivo, goKlient ti ricorda in Home quando è ora di rifarla.`),
      faq('16', `Ho cancellato un archivio per sbaglio. Posso recuperarlo?`,
        `Sì, se l'hai cancellato con "Azzera archivi": prima di cancellare, goKlient fa da sola una copia di sicurezza nella cartella Download/goKlient. La rimetti da Altro, Gestione archivi, Importazione: in cima trovi l'elenco delle copie, con nome, data, ora e peso.`),
    ],
  },
  {
    id: 'piu-apparecchi',
    titolo: 'Più apparecchi',
    domande: [
      faq('17', w ? `Posso usarla sul telefono e sul computer insieme?` : `Posso usarla sul telefono e sul tablet insieme?`,
        `Sì. Crei il tuo accesso goKlient sul primo apparecchio (Altro, Sincronizzazione cloud). Sugli altri entri con la stessa email e la stessa password: ritrovi gli stessi clienti, aggiornati ogni volta che apri goKlient. ${testoWindows}`),
      faq('18', `Se perdo il telefono perdo i clienti?`,
        `Se usi il cloud, no: sul telefono nuovo installi goKlient, entri con il tuo accesso e premi "Sincronizza ora". Torna tutto ciò che era stato sincronizzato. Se non usi il cloud, ti serve una copia di sicurezza su file fatta prima.`),
      faq('18b', `Ho cambiato o ripristinato il telefono: occupo un posto in più?`,
        `Sì, il telefono nuovo, o lo stesso dopo un ripristino o una nuova installazione, conta come un apparecchio nuovo. Dall'app apri l'elenco dei tuoi apparecchi e togli quello che non usi più: il posto si libera subito. Puoi farlo in qualsiasi momento, senza scriverci.`),
      faq('19', `Posso dare l'accesso a un collaboratore?`,
        `goKlient è pensata per una persona con più apparecchi: l'archivio è legato al tuo account. Non ci sono utenti diversi con permessi diversi. Chi conosce email e password del tuo account vede e modifica tutto.`),
      faq('20', `Che cosa succede se modifico lo stesso cliente su due apparecchi?`,
        `Vale la modifica più recente, per tutta la scheda. Se il cloud rifiuta una tua modifica perché ne ha già una più recente, l'app te lo dice e ti invita a rifarla. Consiglio: prima di modificare lo stesso cliente da un altro apparecchio, premi "Sincronizza ora".`),
      faq('21', `Ho dimenticato la password del cloud. Ho perso i dati?`,
        `No. I dati sono legati al tuo account, non alla password. Nella pagina di accesso scegli "Ho dimenticato la password": ti arriva un codice per email e ne scegli una nuova. Il codice lo leggi da qualunque apparecchio, anche dal computer di un familiare.`),
    ],
  },
  {
    id: 'posta',
    titolo: 'Posta',
    domande: [
      faq('22', `Che casella di posta mi serve?`,
        `Quella che usi già. Per Outlook e Hotmail basta l'indirizzo e l'accesso con Microsoft: nessuna password da scrivere nell'app. Per Gmail vedi la domanda qui sotto. Per Aruba, Libero, TIM, Tiscali e molti altri, anche esteri, l'app trova da sola i server e tu scrivi solo la password. Funziona anche con l'indirizzo della tua azienda.`,
        [{ testo: 'vedi la domanda qui sotto', href: '#domanda-23' }]),
      faq('23', `Funziona con Gmail?`,
        `Sì. Per spedire le email ai clienti basta l'accesso con Google. Se vuoi anche leggere e cercare la tua posta Gmail dentro goKlient, serve la "password per le app" di Google: una password speciale che crei nel tuo account Google e scrivi una volta nell'app.`),
      faq('24', `Le email partono dal mio indirizzo?`,
        `Sì. goKlient spedisce dalla tua casella, e le email compaiono anche nella cartella Posta inviata, come se le avessi mandate dal tuo programma di posta. Se vuoi che i clienti vedano l'indirizzo dell'azienda, puoi indicarlo come mittente, purché il tuo fornitore di posta lo abbia autorizzato.`),
      faq('25', `Posso scrivere a tanti clienti insieme?`,
        `Sì. Scegli un gruppo o una selezione di clienti: goKlient spedisce una email separata a ciascuno, con una pausa di circa cinque secondi tra l'una e l'altra, quindi un invio lungo richiede qualche minuto. Se superi il limite prudente del tuo fornitore (circa 400 destinatari per Gmail, 1000 per Microsoft, 300 per gli altri) l'app ti avvisa prima.`),
      faq('26', `Le mie email finiscono nella posta indesiderata dei clienti. Perché?`,
        `Con Gmail e Outlook di solito non succede. Se spedisci da un indirizzo della tua azienda, la consegna dipende dal dominio: chi lo gestisce deve pubblicare i record SPF e DKIM del tuo fornitore di posta. È una configurazione gratuita, da fare una volta.`),
    ],
  },
  {
    id: 'preventivi',
    titolo: 'Preventivi',
    domande: [
      faq('27', `Posso fare i preventivi con goKlient?`,
        `Sì. Nella scheda di un evento con una proposta d'ordine tocchi Preventivo: il foglio è già composto con l'intestazione della tua azienda, il cliente, i prodotti, imponibile, IVA e totale. Lo correggi come vuoi, poi con Preventivo PDF diventa un PDF con il suo numero, per esempio 2026/011, e lo mandi per email. Prima, una volta sola, inserisci i dati della tua azienda in Altro, La mia azienda.`),
      faq('28', `Serve internet per fare un preventivo?`,
        `Per scriverlo no. Per dargli il numero sì: il numero lo assegna il cloud, in ordine, così due apparecchi non ricevono mai lo stesso numero. Se in quel momento manca la rete, il preventivo resta una bozza e riprovi più tardi, senza perdere niente. Per numerare serve la sincronizzazione cloud attiva.`),
      faq('29', `Il cliente vuole cambiare qualcosa. Posso modificare un preventivo già fatto?`,
        `Un preventivo con il numero non si modifica: si fa una nuova revisione. Tiene lo stesso numero con una lettera in più (2026/014, poi 2026/014 a) e riporta quale versione sostituisce. Nella scheda dell'evento trovi lo storico di tutte le revisioni, con data, totale e se l'hai già mandata. Tutti i preventivi li ritrovi in Altro, Preventivi; nella lista dei contatti una "P" colorata ti dice a chi devi ancora mandarlo e a chi l'hai già mandato.`),
      faq('30', `goKlient fa anche le fatture?`,
        `No. goKlient fa ordini e preventivi, ma non emette fatture e non incassa i pagamenti dei tuoi clienti. Per le fatture continui a usare il programma che usi oggi. Il preventivo accettato non diventa ancora un ordine da solo: la proposta d'ordine resta nell'evento da cui sei partito, e il passaggio automatico è allo studio.`),
      faq('31', `Il logo della mia azienda compare nel preventivo?`,
        `Sì, se lo hai inserito in Altro, Parametri della App, Logo. Il logo resta sull'apparecchio dove lo hai inserito: se usi goKlient anche su un tablet, inseriscilo anche lì. Senza logo il preventivo esce senza immagine.`),
    ],
  },
  {
    id: 'eliminare-account',
    titolo: "Eliminare l'account",
    domande: [
      faq('32', `Come elimino il mio account goKlient?`,
        `Dall'app: Altro, Sincronizzazione cloud, "Elimina account goKlient". Si fa in due tempi, la richiesta e poi la conferma tra 4 e 48 ore dopo. Dopo la conferma i dati vengono cancellati dal cloud entro 30 giorni e fino ad allora puoi ripensarci. Senza l'app, scrivi a ${config.emailInfo} dall'indirizzo del tuo account, con oggetto "Eliminazione account goKlient". Tutti i dettagli nella pagina "Eliminare l'account e i dati".`,
        [
          { testo: config.emailInfo, href: `mailto:${config.emailInfo}` },
          { testo: `Eliminare l'account e i dati`, href: '/elimina-account' },
        ]),
    ],
  },
  {
    id: 'costi',
    titolo: 'Costi',
    domande: [
      faq('33', `Quanto costa?`,
        `goKlient Professional costa ${m.imponibile} euro + IVA al mese (${m.ivato} euro IVA inclusa) oppure ${a.imponibile} euro + IVA all'anno (${a.ivato} euro IVA inclusa): con l'annuale hai due mesi gratis. Puoi provarlo gratis per ${giorniProva} giorni con tutte le funzioni, dalla creazione del tuo account gratuito, senza carta: la dimostrazione con i dati d'esempio non consuma la prova. Puoi disdire quando vuoi e resti abbonato fino alla fine del periodo già pagato. Il cloud è incluso. Per inviare le email usi la tua casella di posta, non serve un servizio di invio a pagamento. La licenza è personale e vale fino a ${apparecchi} apparecchi fra Android e Windows. Se cambi apparecchio, togli tu stesso quello vecchio dall'app e fai posto al nuovo, in qualsiasi momento.${w ? '' : ` La versione per Windows arriverà presto ed è già compresa nell'abbonamento.`}`,
        [{ testo: 'goKlient Professional', href: '/prezzi' }]),
      faq('33b', `La prova è finita e non ho fatto in tempo a provarla. Che cosa faccio?`,
        `Scrivici a ${config.emailInfo}: vediamo insieme che cosa si può fare.`,
        [{ testo: config.emailInfo, href: `mailto:${config.emailInfo}` }]),
      faq('33c', `Che cosa succede se non rinnovo?`,
        `Alla scadenza goKlient ti mostra una schermata dedicata. Da lì restano sempre disponibili la copia di sicurezza, l'esportazione dei contatti in Excel e delle scadenze, l'elenco dei tuoi apparecchi, l'uscita e l'eliminazione dell'account. I dati sul tuo apparecchio non vengono cancellati. Quelli nel cloud restano conservati per 90 giorni, poi vengono cancellati, e prima ti avvisiamo: se rinnovi entro quel periodo, ritrovi tutto. Per abbonarti: goklient.app/abbonati.`),
    ],
  },
  {
    id: 'quando-qualcosa-non-va',
    titolo: 'Quando qualcosa non va',
    domande: [
      faq('34', `L'app si è chiusa da sola. Ho perso qualcosa?`,
        `Alla riapertura goKlient ti avvisa con "Chiusura anomala rilevata" e ti rassicura: i tuoi dati non sono stati toccati. Puoi mandarci la segnalazione con "Segnala via email". Su Android, se compare "Risparmio energetico attivo", conviene dare a goKlient la batteria "Senza restrizioni".`),
    ],
  },
];

/** Tutte le domande in un elenco solo, nell'ordine del brief. */
export const tutteLeFaq: Faq[] = sezioniFaq.flatMap((s) => s.domande);

/** Le quattro domande dell'anteprima in Home (B1, 1.8): che cos'e', senza internet, telefono perso, casella di posta. */
export const faqHome = ['1', '11', '18', '22'];

export function trovaFaq(numero: string): Faq | undefined {
  return tutteLeFaq.find((f) => f.numero === numero);
}
