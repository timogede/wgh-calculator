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
                  <div className="donate__option-column donate__option-column-1">
                    <p>Menge</p>
                    <label class="donate__radio">
                      <input type="radio" name="amount_option" value="5.00" />
                      <span class="checkmark"></span>
                      €5
                    </label>
                    <label class="donate__radio">
                      <input type="radio" name="amount_option" value="10" />
                      <span class="checkmark"></span>
                      €10
                    </label>
                    <label class="donate__radio">
                      <input type="radio" name="amount_option" value="20" />
                      <span class="checkmark"></span>
                      €20
                    </label>
                    <label class="donate__radio">
                      <input type="radio" name="amount_option" value="50" />
                      <span class="checkmark"></span>
                      €50
                    </label>
                    <label class="donate__radio">
                      <input type="radio" name="amount_option" value="other" />
                      <span class="checkmark"></span>
                      anderer Betrag
                    </label>
                    <div className="donate__other">
                      <input
                        type="text"
                        placeholder="€35"
                        name="amount_option--other-value"
                      />
                    </div>
                  </div>
                  <div className="donate__option-column donate__option-column-2">
                    <label class="donate__radio">
                      <input
                        type="radio"
                        name="frequenzy_option"
                        value="other"
                      />
                      <span class="checkmark"></span>
                      einmalige Spende
                    </label>
                    <label class="donate__radio">
                      <input
                        type="radio"
                        name="frequenzy_option"
                        value="other"
                      />
                      <span class="checkmark"></span>
                      monatliche Spende
                    </label>
                  </div>
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
