import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const CarbonCreditStatus = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div style={{ width: "68%", marginRight: "10px" }}>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">Select</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown && dropdown ? (
        <div className="drop_menu">
          <p>Selected</p>
          <p>To be done (TBD)</p>
        </div>
      ) : null}
    </div>
  );
};

export default CarbonCreditStatus;
