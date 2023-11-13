import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const Business__Input = ({isDisabled=false, option, setValue=()=>{}, currValue='', type="text" }) => {

  return (
    <div className="dropdown" style={{}}>
      <input
        disabled={isDisabled}
        className="business__input"
        type={type}
        value={currValue}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* {option && option ? (
        <p className="kg" style={{ margin: "0" }}>
          kg
        </p>
      ) : null} */}
    </div>
  );
};

export default Business__Input;
