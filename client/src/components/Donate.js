import React from "react";

const donate = () => {
  const donateHandler = (e) => {
    let clickedElement = e.target;
    if (clickedElement.classList.contains("active")) {
      clickedElement.classList.remove("active");
    } else {
      clickedElement.classList.add("active");
    }
  };

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

  const urlBuilder = () => {};

  return (
    <React.Fragment>
      <div className="donate container container--margin">
        <div className="donate_inside container__inside">
          <div className="donate__columns">
            <div className="donate__column donate__column-1">
              <div className="donate__text-box">
                <h2>handicap.report unterstützen</h2>
                <p>
                  <strong>DID YOU KNOW:</strong> If only 1% of MyGolfSpy readers
                  donated $25, we would be able to become completely independent
                  in 12-months. With every donation, you create change. Would
                  you be willing to help by giving a donation? Every dollar will
                  help. Make a donation to support our independent and expert
                  golf equipment research.
                  <strong>
                    A PayPal account is not required in order to donate.
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
                      />
                      <span class="checkmark"></span>
                      €50
                    </label>
                    <label class="donate__radio">
                      <input
                        id="radio-other"
                        type="radio"
                        name="amount_option"
                        value="other"
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
                  <button>
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

export default donate;
