import React from "react";
import aboutImg from "../../Image/showcase/Group 34027.png";
import "./AboutUs.css";
import avatar from "../../Image/showcase/Ellipse 1.png";
import monitor from "../../Image/achivementLogo/monitor-mobbile.png";
import people from "../../Image/achivementLogo/people.png";
import client from "../../Image/achivementLogo/user.png";
import cup from "../../Image/achivementLogo/cup.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us-upper">
          <div className="img-holder">
            <img width="484px" src={aboutImg} alt="" />
          </div>
          <div className="text-area">
            <h4 className="about-us-text">About Us</h4>
            <h4 className="solution-text">
              A dedicated solution for <br /> startups and enterprises
            </h4>
            <p className="about-doc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="hr"></div>
            <div className="avatar">
              <img width="88px" height="88px" src={avatar} alt="" />
              <div className="quote-text">
                <p>
                  "Fieldx is for teams that care about their product growth."
                </p>
                <h4>CEO, FieldX</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="all-achievements">
            <div className="achievement">
              <img src={monitor} alt="" />
              <h4 className="number">10+</h4>
              <h5 className="achieved-text">Platforms Created</h5>
            </div>
            <div className="achievement">
              <img src={people} alt="" />
              <h4 className="number">1559+</h4>
              <h5 className="achieved-text">Total Users</h5>
            </div>
            <div className="achievement">
              <img src={client} alt="" />
              <h4 className="number">10+</h4>
              <h5 className="achieved-text">Total Clients</h5>
            </div>
            <div className="achievement">
              <img src={cup} alt="" />
              <h4 className="number">300 Days</h4>
              <h5 className="achieved-text">In Operations</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
