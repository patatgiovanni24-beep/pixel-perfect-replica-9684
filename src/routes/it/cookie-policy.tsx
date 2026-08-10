import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/legal-page";
import { SITE_URL } from "@/lib/hotel-schema";
import { LEGAL } from "@/lib/legal";

export const Route = createFileRoute("/it/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Hotel alpi.in" },
      {
        name: "description",
        content: "Informazioni sui cookie e le tecnologie simili usate da Hotel alpi.in.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/it/cookie-policy` }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updatedLabel="Ultimo aggiornamento: agosto 2026">
      <h2>Nessun cookie di profilazione o marketing</h2>
      <p>
        Questo sito non utilizza cookie di analisi (es. Google Analytics), cookie di profilazione né
        cookie di marketing/pubblicitari. Non è quindi presente un banner di consenso ai cookie,
        perché al momento non installiamo alcun cookie non essenziale.
      </p>

      <h2>Font</h2>
      <p>
        I caratteri tipografici del sito sono ospitati direttamente sui nostri server: nessuna
        richiesta viene inviata a Google Fonts o ad altri servizi esterni per il loro caricamento.
      </p>

      <h2>Mappa incorporata (Google Maps)</h2>
      <p>
        Nella pagina "Il Territorio" è incorporata una mappa di Google Maps per mostrare la
        posizione dell'hotel. Il caricamento di questo contenuto comporta una connessione ai server
        di Google, che possono impostare propri cookie tecnici secondo le proprie policy,
        indipendenti da noi. Puoi consultare l'informativa privacy di Google all'indirizzo{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cta underline"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Se in futuro aggiungeremo strumenti di analisi</h2>
      <p>
        Qualora in futuro decidessimo di introdurre strumenti di analisi statistica o marketing,
        attiveremo preventivamente un banner di consenso conforme al GDPR, che bloccherà
        l'attivazione di questi strumenti finché non avrai espresso il tuo consenso, e aggiorneremo
        questa pagina di conseguenza.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        {LEGAL.businessName}, P.IVA {LEGAL.vatNumber}, {LEGAL.registeredOffice} —{" "}
        {LEGAL.contactEmail}
      </p>
    </LegalPage>
  );
}
