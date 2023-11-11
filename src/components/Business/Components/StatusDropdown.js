import React, { useState } from "react";
import "./StatusDropdown.css";

import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";
const StatusDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div
        className="dropdown"
        style={{ width: "85%" }}
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="dropdown__option">Status</div>
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

export default StatusDropdown;
