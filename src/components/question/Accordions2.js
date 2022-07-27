import React from "react";
import "./Accordions.css";

const Accordions = () => {
  return (
    <div className="gap2">
      <div class="accordion-wrapper">
        <div class="accordion">
          <input type="radio" name="radio-a" id="check4" />
          <label class="accordion-label" for="check4">
          How do you take payments?
          </label>
          <div class="accordion-content">
            <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check5" />
          <label class="accordion-label" for="check5">
          Can I also track website analytics on fieldX?
          </label>
          <div class="accordion-content">
            <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </p>
          </div>
        </div>
        <div class="accordion">
          <input type="radio" name="radio-a" id="check6" />
          <label class="accordion-label" for="check6">
          What makes Bizzy different from other <br /> analytics tools?
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
