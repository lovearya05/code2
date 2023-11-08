import React from "react";
import code2Logo from "../../assets/code2Logo.svg";
import "./Login.css";
import code2LogoText from "../../assets/code2LogoText.svg";
import InputText from "./EssentialComponents/InputText";
import InputBox from "./EssentialComponents/InputBox";
import GreenButton from "./EssentialComponents/GreenButton";
import SocialMedia from "./EssentialComponents/SocialMedia";

const Login = () => {
  return (
    <div className="loginPage">
      {/* Upper part of login page */}
      <div style={{ flexGrow: 1, height: "92vh" }}>
        <div className="upperLoginPart">
          <div className="loginPageLeft">
            <img src={code2Logo} alt="" className="loginLogoImg" />
          </div>
          <div className="loginPageText">
            <h2>Sign In to</h2>
            <img className="loginTextlogo" src={code2LogoText} alt="" />
          </div>
        </div>
        {/* Middle part of login page */}
        <div className="inputTextBox">
          <InputText title="Email" />
          <InputBox placeholdeText="abc@gmail.com" />
          <InputText title="Password" />
          <InputBox placeholdeText="abc@gmail.com" />
          <p className="forgotText">I forgot my password.</p>
          <div>
            <GreenButton buttonText="Login" />
          </div>
          <div className="alreadyUser">
            <p>Want to register?</p>
            <a href="/signup">Sign up</a>
          </div>
          <p className="continue">Or continue with</p>
          <div className="socialMedia">
            <SocialMedia />
          </div>
        </div>
      </div>
      {/* Bottom part of Login page */}
      <div className="bottomLogin">
        <p>
          By signing up, you agree to our <a href="/">Terms</a> &{" "}
          <a href="/">Privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
