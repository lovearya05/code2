import React from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const Business__Input = ({option}) => {
  return (
    <div className="dropdown" style={{}}>
      <input className="business__input" />
      {option && option ? (
        <p className="kg" style={{ margin: "0" }}>
          kg
        </p>
      ) : null}
    </div>
  );
};

export default Business__Input;
