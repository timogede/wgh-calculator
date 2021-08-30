import React, { useState } from "react";

const Donate = () => {
  const [otherAmountValue, setOtherAmountValue] = useState(35);
  const otherAmount = (e) => {
    let clickedElementType = e.target.tagName;
    if (clickedElementType == "INPUT") {
      let clickedId = e.target.id;
      console.log(e.target.tagName);
      console.log(clickedId);
      if (clickedId == "radio-other" || clickedId == "radio-other-value") {
        document.getElementById("text-other").classList.add("active");
      } else {
        document.getElementById("text-other").classList.remove("active");
      }
    }
  };

  const freqAmount = (e) => {
    let clickedElementType = e.target.tagName;
    if (clickedElementType == "INPUT") {
      let clickedId = e.target.id;
      console.log(e.target.tagName);
      console.log(clickedId);
      if (clickedId == "freq_monthly") {
        document.getElementById("freq_once").classList.remove("active");
        document.getElementById("freq_monthly").classList.add("active");
      } else {
        document.getElementById("freq_monthly").classList.remove("active");
        document.getElementById("freq_once").classList.add("active");
      }
    }
  };

  const otherAmountHandler = (e) => {
    setOtherAmountValue(e.target.value);
    console.log(otherAmountValue);
  };

  const defaultValueHandler = (e) => {
    setOtherAmountValue(35);
    console.log(otherAmountValue);
  };

  const urlBuilder = (e) => {
    if (document.getElementById("freq_once").classList.contains("active")) {
      window.open("https://paypal.me/timogede/" + otherAmountValue);
    } else {
      window.open(
        "https://www.paypal.com/donate?hosted_button_id=MT4S2VCTRBJW4"
      );
    }
  };

  return (
    <React.Fragment>
      <div className="donate container container--margin-huge">
        <div className="donate_inside container__inside">
          <div className="donate__columns">
            <div className="donate__column donate__column-1">
              <div className="donate__text-box">
                <h2>handicap.report unterstützen</h2>
                <p>
                  <strong>WUSSTEST DU SCHON:</strong> Wenn nur 10% der
                  handicap.report Nutzer €20 spenden, könnte ich alle geplanten
                  Funktionen in den nächsten Wochen umsetzen. Zusätzlich wären
                  alle laufenden Kosten für handicap.report für das nächste Jahr
                  gedeckt. Jeder einzelne Euro hilft. Jede Spende unterstützt
                  mich dabei, unabhängig diese Website zu betreiben und dir mit
                  deinem Handicap zu helfen.
                  <strong>
                    Ein PayPal Account ist nicht notwendig für eine Spende.
                  </strong>
                </p>
              </div>
            </div>
            <div className="donate__column donate__column-2">
              <div className="donate__donate-box">
                <h2>an handicap.report spenden</h2>
                <div className="donate__option-columns">
                  <div
                    onClick={otherAmount}
                    className="donate__option-column donate__option-column-1"
                  >
                    <p>Menge</p>
                    <label class="donate__radio">
                      <input
                        id="radio-5"
                        type="radio"
                        name="amount_option"
                        value="5.00"
                        onChange={otherAmountHandler}
                        defaultChecked
                      />
                      <span class="checkmark"></span>
                      €5
                    </label>
                    <label class="donate__radio">
                      <input
                        id="radio-10"
                        type="radio"
                        name="amount_option"
                        value="10"
                        onChange={otherAmountHandler}
                      />
                      <span class="checkmark"></span>
                      €10
                    </label>
                    <label class="donate__radio">
                      <input
                        id="radio-20"
                        type="radio"
                        name="amount_option"
                        value="20"
                        onChange={otherAmountHandler}
                      />
                      <span class="checkmark"></span>
                      €20
                    </label>
                    <label class="donate__radio">
                      <input
                        id="radio-50"
                        type="radio"
                        name="amount_option"
                        value="50"
                        onChange={otherAmountHandler}
                      />
                      <span class="checkmark"></span>
                      €50
                    </label>
                    <label class="donate__radio">
                      <input
                        id="radio-other"
                        type="radio"
                        name="amount_option"
                        value={otherAmountValue}
                        onChange={defaultValueHandler}
                      />
                      <span class="checkmark"></span>
                      anderer Betrag
                    </label>
                    <div id="text-other" className="donate__other">
                      <input
                        id="radio-other-value"
                        type="number"
                        placeholder="€35"
                        name="amount_option--other-value"
                        onChange={otherAmountHandler}
                      />
                    </div>
                  </div>
                  <div
                    onClick={freqAmount}
                    className="donate__option-column donate__option-column-2"
                  >
                    <p>Häufigkeit</p>
                    <label class="donate__radio">
                      <input
                        id="freq_once"
                        class="active"
                        type="radio"
                        name="frequenzy_option"
                        value="other"
                        defaultChecked
                      />
                      <span class="checkmark"></span>
                      Einmalige Spende
                    </label>
                    <label class="donate__radio">
                      <input
                        id="freq_monthly"
                        type="radio"
                        name="frequenzy_option"
                        value="other"
                      />
                      <span class="checkmark"></span>
                      Monatliche Spende
                    </label>
                  </div>
                </div>
                <div className="donate__button-wrap">
                  <button onClick={urlBuilder}>
                    <i className="fas fa-lock-alt"></i>Spenden
                  </button>
                </div>
                <div className="donation-widget__card-icons">
                  <span className="credit-card-icon paypal"></span>
                  <span className="credit-card-icon visa"></span>
                  <span className="credit-card-icon mastercard"></span>
                  <span className="credit-card-icon discover"></span>
                  <span className="credit-card-icon american-express"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Donate;
