import React from "react";

const Faq = () => {

  const faqToggler = (e) =>{
  let clickedElement = e.target;
  if (clickedElement.classList.contains("active")){
        clickedElement.classList.remove("active");
  }
  else{
    clickedElement.classList.add("active");
  }

  }

  return (

    <React.Fragment>
    <div class="faq container" id="faq">
      <div class="faq__inside container__inside">
        <h2>Häufig gestellte Fragen (FAQs):</h2>
    <button onClick={faqToggler} class="accordion">Was ist der Score Differential?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button onClick={faqToggler} class="accordion">Wie wird der Score Differential berechnet?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button id="faq-score" onClick={faqToggler} class="accordion">Was ist der "Score"?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button id="faq-cr" onClick={faqToggler} class="accordion">Was ist das Course Rating (CR)?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button id="faq-slope" onClick={faqToggler} class="accordion">Was ist der Slope?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button id="support" onClick={faqToggler} class="accordion">Wie kann ich die Entwicklung von handicap.report unterstützen?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button onClick={faqToggler} class="accordion">Wie finde ich das Course Rating und den Slope meines Platzes?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button onClick={faqToggler} class="accordion">Wie werden 9 Loch Runden gewertet?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    <button onClick={faqToggler} class="accordion">Wo finde ich mehr Informationen zum World Handicap Index?</button>
    <div class="panel">
    <p>Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text</p>
    </div>

    </div>
    </div>
    </React.Fragment>
  );
}

export default Faq;
