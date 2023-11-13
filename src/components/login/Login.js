import React, { useState } from "react";
import code2Logo from "../../assets/code2Logo.svg";
import "./Login.css";
import code2LogoText from "../../assets/code2LogoText.svg";
import InputText from "./EssentialComponents/InputText";
import InputBox from "./EssentialComponents/InputBox";
import GreenButton from "./EssentialComponents/GreenButton";
import SocialMedia from "./EssentialComponents/SocialMedia";
import { useNavigate } from "react-router";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { async } from "q";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/storeSlicer";
import toast, { toastConfig } from "react-simple-toasts";
import Loader from "./EssentialComponents/Loader";
import { app } from "../../firebaseConfig";

toastConfig({ theme: "dark" });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const [loading, setLaoding] = useState(false);

  // navigate('/profile',{ replace: true })
  console.log({ email, password });

  const handlleLoginClick = async () => {
    // if (loading) return
    // setLaoding(true)
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast("Please enter a valid Email");
      return;
    }
    console.log("handle click pressed 1");
    if (!password || password.length < 6) {
      toast("Password should be 6 chracter long");
      return;
    }

    handleUserLogin();
    // setLaoding(false)
  };
  const handleUserLogin = async () => {
    setLaoding(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log({ userCredential });
      // const user = userCredential.user;
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: "",
          photoUrl: "",
        })
      );
      navigate("/code2/profile", { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/invalid-login-credentials") {
        toast("Invalid credentials");
      }
      console.log({ errorCode });
    }
    setLaoding(false);
  };

  const handleGoToSignup = () => {
    navigate("/code2/signup", { replace: true });
  };
  const handleForgotPassword = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast("Enter a valid Email to Reset Password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent!");
        toast("Reset password link send on your email");
      })
      .catch(function (error) {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <>
      {loading && <Loader />}
      <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
        <div className="login__left">
          <img src={code2Logo} className="login__left__logo" alt="logo" />
          <img src={code2LogoText} className="login__lefttext" alt="logo" />
          <h2>Let’s Green the Planet again!</h2>
        </div>
        <div className="login__right">
          <div className="loginPage">
            {/* Upper part of login page */}
            <div className="login__page">
              <div className="upperLoginPart">
                <div className="loginPageLeft">
                  <img src={code2Logo} alt="" className="loginLogoImg" />
                </div>
                <div className="loginPageText">
                  <h2>Login to</h2>
                  <img className="loginTextlogo" src={code2LogoText} alt="" />
                </div>
              </div>
              {/* Middle part of login page */}
              <div className="inputTextBox">
                <InputText title="Email" />
                <InputBox placeholdeText="abc@gmail.com" setValue={setEmail} />
                <InputText title="Password" />
                <InputBox
                  placeholdeText="enter password"
                  type={"password"}
                  setValue={setPassword}
                />
                <p onClick={handleForgotPassword} className="forgotText">
                  I forgot my password.
                </p>
                <div>
                  <GreenButton
                    buttonText="Login"
                    onClickFunc={handlleLoginClick}
                  />
                </div>
                <div onClick={handleGoToSignup} className="alreadyUser">
                  <p>Want to register?</p>
                  <p style={{ color: "#00955F" }}>Sign up</p>
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
        </div>
      </div>
    </>
  );
};

export default Login;
