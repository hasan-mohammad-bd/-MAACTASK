import React from "react";
import "./Accordions.css";

const Accordions = () => {
  return (
    <div className="gap">
      <div class="accordion-wrapper">
        <div class="accordion">
          <input type="radio" name="radio-a" id="check1" checked />
          <label class="accordion-label" for="check1">
          What kind of data can I see in FieldX?
          </label>
          <div class="accordion-content">
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check2" />
          <label class="accordion-label" for="check2">
          Does Bizzy read my customers' data?
          </label>
          <div class="accordion-content">
            <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check3" />
          <label class="accordion-label" for="check3">
          What's your refund and cancellation policy?
          </label>
          <div class="accordion-content">
            <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
