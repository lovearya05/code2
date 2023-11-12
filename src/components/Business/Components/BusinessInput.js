import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const Business__Input = ({ option }) => {
  const [value, setValue] = useState("");

  return (
    <div className="dropdown" style={{}}>
      <input
        className="business__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {option && option ? (
        <p className="kg" style={{ margin: "0" }}>
          kg
        </p>
      ) : null}
    </div>
  );
};

export default Business__Input;
