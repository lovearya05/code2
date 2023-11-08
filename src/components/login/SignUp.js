import React, { useState } from "react";
import "./signup.css";
import "../../index.css";
import code2Logo from "../../assets/code2Logo.svg";
import googleIcon from "../../assets/googleIcon.svg";
import linkedInIcon from "../../assets/linkedInIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ password, email });

  return (
    <div className="container">
      <div className="mainView">
        <div className="topContent">
          <img src={code2Logo} alt="" className="logo-s" />
          <div className="row">
            <p className="topText-s">Sign In to CODE</p>
            <p className="topText-s greenTest">5</p>
          </div>
        </div>

        <div className="userInputs_s">
          <div className="inputHeading">
            <div className="email">Email</div>
            <div className="input_div">
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="input"
              />
            </div>
          </div>

          <div className="inputHeading">
            <div className="email">Password</div>
            <div className="input_div">
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
                type="password"
                className="input"
              />
            </div>
          </div>
          <div className="text1">I forgot my password.</div>

          <div className="button1">
            <div className="btnText">Send me OTP</div>
          </div>

          <div className="row allCenter marTop3">
            <div className="btnText textSize">Already a user?</div>
            <div className="greenTest textSize">Login here</div>
          </div>

          <div className="allCenter marTop3">
            <div className="text12gry4">Or continue with</div>
          </div>

          <div className="allCenter">
            <div className="row">
              <div className="iconBorder"></div>
              <div className="iconBorder"></div>
              <div className="iconBorder"></div>
              <img className="socialIcons" src={googleIcon} alt="" />
              <img className="socialIcons" src={linkedInIcon} alt="" />
              <img className="socialIcons" src={facebookIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
