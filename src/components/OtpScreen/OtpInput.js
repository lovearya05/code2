import React, { useState, useRef } from "react";
import "./OtpInput.css";

const OtpInput = ({ value, onChange, focusNext, focusPrev }) => {
  const inputRef = useRef(null);

  const handleInput = (e) => {
    const newValue = e.target.value.slice(-1);

    // Update the input value in the parent component (OtpScreen)
    onChange(newValue);

    if (newValue && focusNext && inputRef.current.nextElementSibling) {
      // Move focus to the next input
      inputRef.current.nextElementSibling.focus();
    } else if (
      !newValue &&
      focusPrev &&
      inputRef.current.previousElementSibling
    ) {
      // Move focus to the previous input when clearing
      inputRef.current.previousElementSibling.focus();
    }
  };

  return (
    <input
      ref={inputRef}
      className="otpInput"
      type="text"
      value={value}
      onChange={handleInput}
    />
  );
};

export default OtpInput;
