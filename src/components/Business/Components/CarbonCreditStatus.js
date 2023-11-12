import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const CarbonCreditStatus = () => {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState("Select");

  const saveFunction = (chosenValue) => {
    setValue(chosenValue);
    setDropdown(false);
  };
  return (
    <div style={{ width: "68%", marginRight: "10px" }}>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">{value}</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown && dropdown ? (
        <div className="drop_menu">
          <p onClick={() => saveFunction("Selected")}>Selected</p>
          <p onClick={() => saveFunction("TBD")}>To be done (TBD)</p>
        </div>
      ) : null}
    </div>
  );
};

export default CarbonCreditStatus;
