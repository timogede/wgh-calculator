import React from "react";
import handicapRegelnDownload from "../downloads/dgv_handicap-regeln_2021.pdf";
import neunLochScoreDownload from "../downloads/9loch_scorekarte.jpg";
import turnierDetailsDownload from "../downloads/turnierdetails.jpg";
import anpassungenDownload from "../downloads/anpassungen.jpg";

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
      <div className="faq container container--margin-huge" id="faq">
        <div className="faq__inside container__inside">
          <h2>Häufig gestellte Fragen um dein Handicap zu berechnen:</h2>
          <button onClick={faqToggler} className="accordion">
            Wie wird das neue WGH Handicap berechnet 2025?
          </button>
          <div className="panel">
            <p>
              Klick dich einfach durch die weiteren Fragen hier durch und du
              erfährst Schritt für Schritt alles darüber, wie das neue Handicap
              berechnen funktioniert.
            </p>
          </div>
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
          <button
            id="faq-adjustment"
            onClick={faqToggler}
            className="accordion"
          >
            Was ist die Handicap-Anpassung?
          </button>
          <div className="panel">
            <p>
              Das Handicap wird nicht immer aus den besten 8 der letzen 20
              Ergebnisse berechnet, da häufig nicht so viele Ergebnisse
              vorliegen. Bei z.B. 3 Ergebnissen besteht das HCP aus dem
              niedrigsten SD dieser Ergebnisse und davon wird nochmal 2
              abgezogen.
              <a href={anpassungenDownload}>
                <img src={anpassungenDownload} />
              </a>
            </p>
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
                  rel="noreferrer"
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
              Hierzu wird genau wie bei der Berechnung des SD für 18 Loch ein
              angepasster Score benötigt und in den handicap.report zusammen mit
              dem CR und Slope für diesen 9 Loch Platz eingetragen. Für diesen
              angepassten Score fehlt zunächst ein Ergebnis für die zweiten 9
              Loch. Dieses ergibt sich aus 9x Netto Par + 1. Sie kriegen für die
              2. neun Loch also ihre persönliche Netto Par + einem Schlag
              berechnet (oder einfach das Par + Ihre Vorgabe von 9 Loch + 1).
              Dieser Score wird mit dem angepassten Score der ersten neun Loch
              addiert und ergibt somit Ihr Ergebnis, welches Sie nur noch in den
              handicap.report eintragen müssen.
            </p>
            <br />
            <p>
              <b>Beispiel:</b>
              <p>
                Aus <a href="https://mygolf.de?ref=handicap.report">mygolf </a>
                haben wir den gespielten Score, CR, Slope und die Vorgaben für
                jedes Loch.
              </p>
              <br />
              <a href={turnierDetailsDownload}>
                <img src={turnierDetailsDownload} />
              </a>
              <br />
              <a href={turnierDetailsDownload}>
                <img src={neunLochScoreDownload} />
              </a>
              <br />
              <b>CR:</b> 71,4
              <br />
              <b>Slope:</b> 129
              <br />
              <b>Par:</b> 72
              <br />
              <b>Gespielter Score:</b> 39
              <br />
              <b>angepasster Score:</b> 39 (da kein Loch schlechter als 2 über
              Netto Par)
              <br />
              <b>Vorgaben für 9 Loch:</b> 5 Striche
              <br />
              <b>Berechneter Score für die zweiten 9 Formel:</b> 9x Netto Par +
              1
              <br />
              <b>Berechneter Score für die zweiten 9:</b> 5 + 3 + 5 + 3 + 4 + 5
              + 5 + 6 + 5 + 1 = 42
              <br />
              <b>oder einfach:</b> 9 Loch Par + 9 Loch Vorgaben + 1 = 36 + 5 + 1
              = 42
              <br />
              <b>vollständiger Score:</b> angepasster Score erste 9 Loch +
              berechneter Score zweiten 9 = 39 + 42 = 81
              <br />
              <b>Score Differential (SD) für diese 9 Loch Runde:</b> im
              handicap.report eintragen: a. Score 81, CR 71,4, Slope 129 = SD
              8.4
              <br />
              <b>Info: </b>
              Falls dieser SD minimal vom SD in mygolf abweicht, liegt dies
              daran, dass mygolf häufig den zusätzlichen Schlag (+1) für 9
              Lochrunden laut dem neuen Regelwerk fälschlicherweise nicht
              anwendet. Ihre Runde wird von mygolf also um einen Schlag
              verbessert (nett, aber nicht korrekt).
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={handicapRegelnDownload}
                >
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
