import React, { useState } from "react";
import "./StatusDropdown.css";

import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";
const StatusDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div style={{ width: "32%" }}>
      <div
        className="dropdown"
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "18px",
        }}
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="dropdown__option">Status</div>
        <div className="dropdown__button" style={{ paddingLeft: "20px" }}>
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
