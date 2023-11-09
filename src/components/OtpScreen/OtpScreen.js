import React, { useEffect, useState } from "react";
import GreenButton from "../login/EssentialComponents/GreenButton";
import "./OtpScreen.css";
import OtpInput from "./OtpInput";

const OtpScreen = ({email='', handleVerifyOTP = () => { }, handleSenOtp=()=>{} }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const handleOtpChange = (index, value) => {
    // Update the OTP value at the specified index
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };
  const [time, setTime] = useState(30)
  useEffect(()=>{
    if(time>0){
      setTimeout(()=>{
        setTime(p=>p>0 ? p-1 : p)
      },1000)
    }
  },[time])
  
  return (
    <div className="otpScreen">
      <div className="otpScreenText">
        <h2>Enter the Code</h2>
        <p>
          Code sent on <span className="otpEmail">{email}</span>
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
      <div className="timer" onClick={()=>{
        if(time==0){
          handleSenOtp()
          setTime(30)
        }
      }} >
        <p>{time>0 ? `Resend Code in ` : 'Resend Code'}
          {time>0 && <span>00:{time}</span>}
        </p>
      </div>
      <GreenButton onClickFunc={() => {
        const otp = otpValues.join('')
        // console.log('otp is', otp)
        handleVerifyOTP(otp)
      }} buttonText="Verify OTP" />
    </div>
  );
};

export default OtpScreen;
