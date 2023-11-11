import React from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const CarbonCreditStatus = () => {
  return (
    <div className="dropdown" style={{ width: "100%", marginRight: "10px" }}>
      <div className="dropdown__option">Select</div>
      <div className="dropdown__button">
        <AiOutlineDown className="down__arrow" />
      </div>
    </div>
  );
};

export default CarbonCreditStatus;
