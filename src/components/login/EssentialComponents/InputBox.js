import React from "react";
import "./InputBox.css";
const InputBox = ({ placeholdeText }) => {
  return (
    <input
      className="inputBox"
      placeholder={placeholdeText}
      style={{
        width: "95%",
        fontSize: "18px",
        background: "transparent",
        // paddingLeft:"10px",
        paddingTop: "6px",
        paddingBottom: "6px",
      }}
    />
  );
};

export default InputBox;
