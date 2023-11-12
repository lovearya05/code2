import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState("Select");

  const saveFunction = (chosenValue) => {
    setValue(chosenValue);
    setDropdown(false);
  };

  return (
    <div>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">{value}</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown ? (
        <div className="drop_menu">
          <p onClick={() => saveFunction("Clean development mechanism(CDM)")}>
            Clean development mechanism(CDM)
          </p>
          <p onClick={() => saveFunction("Verified carbon standard(VCS)")}>
            Verified carbon standard(VCS)
          </p>
          <p onClick={() => saveFunction("Gold standard")}>Gold standard</p>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
