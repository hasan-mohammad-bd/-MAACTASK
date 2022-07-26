import React from "react";
import "./Features.css";
import featureIcon from "../../Image/showcase/boxIcon.png";
import phonePic from "../../Image/showcase/Group 34050.png";

const Features = () => {
  return (
    <div className="features-container">
      <h3 className="product-text">Products Features</h3>
      <h3 className="data-text">Make more out of your data</h3>
      <div className="features">
        <div className="first-3-features">
          <div className="first-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">Real-time analytics</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="first-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">Intuitive dashboard</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="first-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">Smart suggestions</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
        <div className="img-holder">
          <img className="phone-img" width="100%" src={phonePic} alt="" />
        </div>
        <div className="last-3-features">
          <div className="last-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">Multiple views</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="last-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">AI-led diagnoses</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on you.
            </p>
          </div>
          <div className="last-feature">
            <img width="72px" src={featureIcon} alt="" />
            <h4 className="feature-heading">Responsive</h4>
            <p className="feature-doc">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
