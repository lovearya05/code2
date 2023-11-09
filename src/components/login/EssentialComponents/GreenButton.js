import React from "react";
import "./GreenButton.css";

const GreenButton = ({ buttonText='', onClickFunc=()=>{}  }) => {
  return <button onClick={onClickFunc} className="greenButton">{buttonText}</button>;
};

export default GreenButton;
