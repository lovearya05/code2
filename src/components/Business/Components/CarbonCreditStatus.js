import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const CarbonCreditStatus = ({options=[], setValue=()=>{}, currValue='' }) => {
  const [dropdown, setDropdown] = useState(false);
  // const [value, setValue] = useState("");

  const saveFunction = (chosenValue) => {
    setValue(chosenValue);
    setDropdown(false);
  };
  return (
    <div style={{ width: "68%", marginRight: "10px" }}>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">{currValue}</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown && dropdown ? (
        <div className="drop_menu">
          {options.map((val,i)=>{
            return <p key={i} onClick={() => saveFunction(val)}>{val}</p>
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CarbonCreditStatus;
