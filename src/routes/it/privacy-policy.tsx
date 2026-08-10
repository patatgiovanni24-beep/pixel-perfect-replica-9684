import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/legal-page";
import { SITE_URL } from "@/lib/hotel-schema";
import { LEGAL } from "@/lib/legal";

export const Route = createFileRoute("/it/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hotel alpi.in" },
      {
        name: "description",
        content: "Informativa sul trattamento dei dati personali di Hotel alpi.in.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updatedLabel="Ultimo aggiornamento: agosto 2026">
      <p>
        <strong>
          Questa è una bozza con dati provvisori (placeholder). Prima della pubblicazione pubblica
          del sito va rivista e completata con i dati reali dell'hotel, idealmente con il supporto
          di un consulente legale/privacy.
        </strong>
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        {LEGAL.businessName}, P.IVA {LEGAL.vatNumber}, con sede legale in {LEGAL.registeredOffice}{" "}
        ("Titolare"). Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali puoi
        scrivere a{" "}
        <a href={`mailto:${LEGAL.contactEmail}`} className="text-cta underline">
          {LEGAL.contactEmail}
        </a>
        .
      </p>

      <h2>Quali dati raccogliamo</h2>
      <p>
        Attraverso il modulo "Prenota" presente sul sito raccogliamo i dati che inserisci
        volontariamente: nome, cognome, indirizzo email, numero di telefono ed eventuale messaggio
        con i dettagli della tua richiesta.
      </p>

      <h2>Come vengono trattati questi dati</h2>
      <p>
        Il modulo "Prenota" non invia i dati a un server: al clic su "Invia richiesta", il tuo
        dispositivo apre direttamente il tuo programma di posta elettronica con un messaggio
        precompilato indirizzato al Titolare. I dati vengono quindi trasmessi solo se e quando tu
        stesso decidi di inviare quell'email, direttamente dal tuo dispositivo alla nostra casella
        di posta — non transitano né vengono memorizzati su server nostri o di terzi.
      </p>

      <h2>Finalità e base giuridica</h2>
      <p>
        Trattiamo questi dati al solo scopo di rispondere alla tua richiesta di informazioni o
        prenotazione. La base giuridica è l'art. 6, par. 1, lett. b) del Regolamento (UE) 2016/679
        ("GDPR") — misure precontrattuali adottate su tua richiesta — oppure, ove applicabile, il
        tuo consenso (art. 6, par. 1, lett. a).
      </p>

      <h2>Destinatari dei dati</h2>
      <p>
        I dati inviati tramite email sono ricevuti unicamente dal Titolare e non vengono comunicati
        a soggetti terzi, salvo obblighi di legge o, in caso di prenotazione confermata, ai soli
        fornitori strettamente necessari alla gestione del soggiorno (es. gestionale prenotazioni,
        adempimenti fiscali).
      </p>

      <h2>Periodo di conservazione</h2>
      <p>
        I dati relativi a semplici richieste di informazioni sono conservati per il tempo necessario
        a evadere la richiesta. In caso di prenotazione confermata, i dati sono conservati per il
        periodo previsto dagli obblighi contabili e fiscali applicabili.
      </p>

      <h2>I tuoi diritti</h2>
      <p>In qualità di interessato hai diritto, in ogni momento, di richiedere:</p>
      <ul>
        <li>accesso ai tuoi dati personali (art. 15 GDPR);</li>
        <li>la rettifica dei dati inesatti (art. 16 GDPR);</li>
        <li>la cancellazione dei dati (art. 17 GDPR);</li>
        <li>la limitazione del trattamento (art. 18 GDPR);</li>
        <li>la portabilità dei dati (art. 20 GDPR);</li>
        <li>opporti al trattamento (art. 21 GDPR).</li>
      </ul>
      <p>
        Puoi esercitare questi diritti scrivendo a{" "}
        <a href={`mailto:${LEGAL.contactEmail}`} className="text-cta underline">
          {LEGAL.contactEmail}
        </a>
        . Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
        (www.garanteprivacy.it).
      </p>

      <h2>Minori</h2>
      <p>
        Il sito non è rivolto a minori di 16 anni e non raccogliamo consapevolmente dati di minori.
      </p>

      <h2>Modifiche a questa informativa</h2>
      <p>
        Questa informativa può essere aggiornata nel tempo. Ti invitiamo a consultare periodicamente
        questa pagina.
      </p>
    </LegalPage>
  );
}
