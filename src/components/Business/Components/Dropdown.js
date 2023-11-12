import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";
const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">Select</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown && dropdown ? (
        <div className="drop_menu">
          <p>Clean development mechanism(CDM)</p>
          <p>Verified carbon standard(VCS)</p>
          <p>Gold standard</p>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
