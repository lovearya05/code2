import React, { useEffect, useState } from "react";
import code2Logo from "../../assets/code2Logo.svg";
import "../login/Login.css";
import code2LogoText from "../../assets/code2LogoText.svg";
import InputText from "../login/EssentialComponents/InputText";
import InputBox from "../login/EssentialComponents/InputBox";
import GreenButton from "../login/EssentialComponents/GreenButton";
import SocialMedia from "../login/EssentialComponents/SocialMedia";
import OtpScreen from "../OtpScreen/OtpScreen";
import emailjs from 'emailjs-com';
import toast, { toastConfig } from 'react-simple-toasts';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'react-simple-toasts/dist/theme/dark.css';
import Loader from "../login/EssentialComponents/Loader";
import { async } from "q";
import { useDispatch } from "react-redux";
import { login, logout } from '../../reduxStore/storeSlicer';
import { useNavigate } from "react-router";

toastConfig({ theme: 'dark' });


const Signup = () => {
  const [showOptPage, setShowOtpPage] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const [otp, setOTP] = useState('')
  const auth = getAuth();
  const [loading, setLaoding] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch()
  // }, [])

  const handleSenOtp = async () => {
    if (loading) return
    setLaoding(true)
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast('Please enter a valid Email')
      return
    }
    if (!password || password.length < 6) {
      toast('Password should be 6 chracter long')
      return
    }
    await sendEmail()
    setLaoding(false)
  }
  const sendEmail = async () => {
    return new Promise((res, rej) => {

      const serviceId = 'service_6sbrjtd'
      const templateId = 'template_6s9rv5a'
      const userId = 'tswF0bxGlMJzKEnZO' // public key
      const otp = parseInt(Math.random() * 10000)
      setOTP(otp)
      // console.log(otp)

      const emailData = {
        from_code: otp,
        message: 'Thank You for Registration!',
        to_email: email
      };

      const form = document.createElement('form');
      form.style.display = 'none';
      for (const key in emailData) {
        if (emailData.hasOwnProperty(key)) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = emailData[key];
          form.appendChild(input);
        }
      }
      document.body.appendChild(form);
      emailjs.sendForm(serviceId, templateId, form, userId)
        .then((result) => {
          console.log(result.text);
          toast('OTP send on your mail address')
          setShowOtpPage(true)
        }, (error) => {
          toast('unable to send OTP')
          document.body.removeChild(form);
          rej('')
          console.log(error.text);
        });
      res('')
      document.body.removeChild(form);
    })
  }
  const handleVerifyOTP = (enteredOTP = '') => {
    if (!enteredOTP || enteredOTP.length != 4 || otp != enteredOTP) {
      toast('Entered wrong OTP!')
    } else {
      setLaoding(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          toast('Registered Sucessfully')
          setOTP('')
          setLaoding(false)
          dispatch(login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: '',
            photoUrl: ''
          }))
          navigate('/code2/profile',{ replace: true })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/email-already-in-use') {
            toast('user already registed please login')
          }
          // error code --- >  error message --> Firebase: Error (auth/email-already-in-use).
          console.log('error code --- >', errorCode, 'error message -->', errorMessage)
          setLaoding(false)
        });
    }
  }
  const handleGotoLogin = ()=>{
    navigate('/code2/login',{ replace: true }) 
  }

  if (showOptPage) {
    return (
      <>
        {loading && <Loader />}
        <OtpScreen handleSenOtp={handleSenOtp} handleVerifyOTP={handleVerifyOTP} />
      </>
    )
  } else {
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
                <h2>Sign In to</h2>
                <img className="loginTextlogo" src={code2LogoText} alt="" />
              </div>
            </div>
            {/* Middle part of login page */}
            <div className="inputTextBox">
              <InputText title="Email" />
              <InputBox placeholdeText="abc@gmail.com" setValue={setEmail} />
              <InputText title="Password" />
              <InputBox placeholdeText="enter password" type={'password'} setValue={setPassword} />
              <p className="forgotText">I forgot my password.</p>
              <div onClick={() => handleSenOtp()} >
                <GreenButton buttonText="Send me OTP" />
              </div>
              <div className="alreadyUser" onClick={handleGotoLogin}>
                <p>Already a user?</p>
                <p>Login here</p>
              </div>
              <p className="continue">Or continue with</p>
              <div className="socialMedia">
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* Bottom part of Login page */}
          <div className="bottomLogin" >
            <p>
              By signing up, you agree to our <a href="/">Terms</a> &{" "}
              <a href="/">Privacy policy</a>
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default Signup;
