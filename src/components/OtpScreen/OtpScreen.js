import React, { useState } from "react";
import GreenButton from "../login/EssentialComponents/GreenButton";
import "./OtpScreen.css";
import OtpInput from "./OtpInput";

const OtpScreen = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    // Update the OTP value at the specified index
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };
  return (
    <div className="otpScreen">
      <div className="otpScreenText">
        <h2>Enter the Code</h2>
        <p>
          Code sent on <span className="otpEmail">abc@gmail.com</span>
        </p>
      </div>
      <div className="otpBoxes">
        {otpValues.map((value, index) => (
          <OtpInput
            key={index}
            value={value}
            onChange={(newValue) => handleOtpChange(index, newValue)}
            focusNext={index < 3}
            focusPrev={index > 0}
          />
        ))}
      </div>
      <div className="timer">
        <p>
          Resend Code in <span>00:30</span>
        </p>
      </div>
      <GreenButton buttonText="Verify OTP" />
    </div>
  );
};

export default OtpScreen;
