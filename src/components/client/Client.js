import React from "react";
import "./Client.css";
import com1 from "../../Image/otherCompanyLogo/Aven.png"
import com2 from "../../Image/otherCompanyLogo/Amara.png"
import com3 from "../../Image/otherCompanyLogo/Circle.png"
import com4 from "../../Image/otherCompanyLogo/Kyan.png"
import com5 from "../../Image/otherCompanyLogo/Treva.png"

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <h4 className="company-text">
          5,000+ high-impact teams rely on Fieldx
        </h4>

        <div className="client-container">
            <img src={com1} alt="" />
            <img src={com2} alt="" />
            <img src={com3} alt="" />
            <img src={com4} alt="" />
            <img src={com5} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Client;
