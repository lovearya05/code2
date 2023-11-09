import React, { useState } from "react";
import code2Logo from "../../assets/code2Logo.svg";
import "./Login.css";
import code2LogoText from "../../assets/code2LogoText.svg";
import InputText from "./EssentialComponents/InputText";
import InputBox from "./EssentialComponents/InputBox";
import GreenButton from "./EssentialComponents/GreenButton";
import SocialMedia from "./EssentialComponents/SocialMedia";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { async } from "q";
import { useDispatch } from "react-redux";
import { login } from "../../reduxStore/storeSlicer";
import toast, { toastConfig } from 'react-simple-toasts';
import Loader from "./EssentialComponents/Loader";

toastConfig({ theme: 'dark' });

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch()
  const [loading, setLaoding] = useState(false)

  // navigate('/profile',{ replace: true })
  console.log({ email, password })

  const handlleLoginClick = async () => {
    // if (loading) return
    // setLaoding(true)
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast('Please enter a valid Email')
      return
    }
    console.log('handle click pressed 1')
    if (!password || password.length < 6) {
      toast('Password should be 6 chracter long')
      return
    }

    handleUserLogin()
    // setLaoding(false)
  }
  const handleUserLogin = async () => {
    console.log('handle click pressed')
    setLaoding(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log({ userCredential })
      // const user = userCredential.user;
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: '',
        photoUrl: ''
      }))
      navigate('/code2/profile', { replace: true })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/invalid-login-credentials') {
        toast('Invalid credentials')
      }
      console.log({ errorCode })
    }
    setLaoding(false)
  }

  const handleGoToSignup =()=>{
    navigate('/code2/signup',{ replace: true })
  }

  return (
    <>
      {loading && <Loader />}

      <div className="loginPage">
        {/* Upper part of login page */}
        <div style={{ flexGrow: 1, height: "92vh" }}>
          <div className="upperLoginPart">
            <div className="loginPageLeft">
              <img src={code2Logo} alt="" className="loginLogoImg" />
            </div>
            <div className="loginPageText">
              <h2>Welcome Back</h2>
              {/* <img className="loginTextlogo" src={code2LogoText} alt="" /> */}
            </div>
          </div>
          {/* Middle part of login page */}
          <div className="inputTextBox">
            <InputText title="Email" />
            <InputBox placeholdeText="abc@gmail.com" setValue={setEmail} />
            <InputText title="Password" />
            <InputBox placeholdeText="enter password" type={'password'} setValue={setPassword} />
            <p className="forgotText">I forgot my password.</p>
            <div>
              <GreenButton buttonText="Login" onClickFunc={handlleLoginClick} />
            </div>
            <div onClick={handleGoToSignup} className="alreadyUser">
              <p>Want to register?</p>
              <p style={{color : '#00955F'}} >Sign up</p>
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
    </>
  );
};

export default Login;
