import React from "react";
import handicapRegelnDownload from "../downloads/dgv_handicap-regeln_2021.pdf";
const Faq = () => {
  const faqToggler = (e) => {
    let clickedElement = e.target;
    if (clickedElement.classList.contains("active")) {
      clickedElement.classList.remove("active");
    } else {
      clickedElement.classList.add("active");
    }
  };

  return (
    <React.Fragment>
      <div className="faq container" id="faq">
        <div className="faq__inside container__inside">
          <h2>Häufig gestellte Fragen (FAQs):</h2>
          <button onClick={faqToggler} className="accordion">
            Was ist der Score Differential?
          </button>
          <div className="panel">
            <p>
              Der Score Differential (SD) ist der Wert, der am Ende deiner Runde
              herauskommt. Der Durchschnitt der besten 8 Score Differentials aus
              den letzten 20 Ergebnissen ergibt dann dein Handicap.
            </p>
          </div>

          <button onClick={faqToggler} className="accordion">
            Wie wird der Score Differential berechnet?
          </button>
          <div className="panel">
            <p>Die Formel für den Score Differential:</p>
            <p>((Score - CR) x 113) / Slope</p>
          </div>

          <button id="faq-score" onClick={faqToggler} className="accordion">
            Was ist der "Score"?
          </button>
          <div className="panel">
            <p>
              Der Score, welcher für die Berechnung des Score Differentials und
              damit auch für das neue Handicap benötigt wird, ist NICHT der
              Score des Zählspiels.
            </p>
            <p>
              Es wäre wahrscheinlich den Score als "angepassten Score" zu
              bezeichnen, da hier ähnlich wie beim Stablefort-System eine Art
              Schutzvorrichtung pro Loch eingebaut ist.
            </p>
            <p>Der maximale Score pro Loch beträgt 2 über dem Netto-Par.</p>
            <p>
              Hat man also eine Vorgabe von 1 auf einem Par 4, ist das
              schlechteste Ergebnis, welches man erzielen kann eine 7. Spielt
              man auf diesem Loch z.B. eine 9 ist dies für das Zählspiel
              natürlich weiterhin relevant, für die Eingabe des Handicaps wird
              der Score für dieses Loch aber von 9 auf 7 reduziert.
            </p>
          </div>

          <button id="faq-cr" onClick={faqToggler} className="accordion">
            Was ist das Course Rating (CR)?
          </button>
          <div className="panel">
            <p>
              Das Course Rating beschreibt den Score den ein Spieler mit
              Handicap 0 auf diesem Platz in der Regel spielt.
            </p>
          </div>

          <button id="faq-slope" onClick={faqToggler} className="accordion">
            Was ist der Slope?
          </button>
          <div className="panel">
            <p>
              Der Slope ist ein spezieller Wert der den Schwierigkeitsgrad eines
              Platzes von 55 (einfach) bis 155 (schwer) beschreibt.
            </p>
            <p>Die Formel für den Slope:</p>
            <p>(Bogey Rating - Course Rating) x 5,381</p>
          </div>

          <button id="support" onClick={faqToggler} className="accordion">
            Wie kann ich die Entwicklung von handicap.report unterstützen?
          </button>
          <div className="panel">
            <p>
              Die Entwicklung von handicap.report hat nicht nur Zeit gekostet,
              sondern bringt auch monatliche Serverkosten mit sich. Zusätzlich
              plane ich natürlich, handicap.report aktuell zu halten und möchte
              weitere Funktionen hinzufügen. Falls Du mich dabei unterstützen
              möchtest, kannst du mir einen{" "}
              <b>
                <a
                  target="_blank"
                  href="https://www.paypal.com/paypalme/timogede/5"
                >
                  virtuellen Kaffee{" "}
                  <i className="fa fa-coffee" aria-hidden="true"></i> kaufen
                </a>
              </b>
            </p>
          </div>

          <button onClick={faqToggler} className="accordion">
            Wie finde ich das Course Rating und den Slope meines Platzes?
          </button>
          <div className="panel">
            <p>
              Einfach mal "Name meines Golfplatzes" Slope CR googlen. Man findet
              dann spätestens auf der Website des Clubs die gesuchten Angaben.
            </p>
          </div>

          <button onClick={faqToggler} className="accordion">
            Wie werden 9 Loch Runden gewertet?
          </button>
          <div className="panel">
            <p>
              Das ist nicht ganz so einfach zu erklären, daher verlinke ich hier
              einfach auf das offizielle Dokument zur neuen Handicapberechnung.
            </p>
          </div>

          <button onClick={faqToggler} className="accordion">
            Wo finde ich mehr Informationen zum World Handicap Index?
          </button>
          <div className="panel">
            <p>
              Hier sind die kompletten 116 Seiten zur Berechnung des neuen
              Handicaps:
            </p>
            <p>
              <b>
                <a target="_blank" href={handicapRegelnDownload}>
                  DGV Handicap Regeln 2021 PDF
                </a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
