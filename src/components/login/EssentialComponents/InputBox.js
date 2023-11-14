import React from "react";
import "./InputBox.css";
const InputBox = ({
  placeholdeText = "",
  type = "text",
  setValue = () => {},
}) => {
  return (
    <input
      className="inputBox"
      type={type}
      placeholder={placeholdeText}
      style={{
        fontSize: "18px",
        background: "transparent",
        paddingLeft: "10px",
        paddingTop: "6px",
        paddingBottom: "6px",
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputBox;
