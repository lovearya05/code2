import React, { useEffect } from "react";
import "./splash.css";
import code2Logo from "../../assets/code2Logo.svg";
import code2LogoText from "../../assets/code2LogoText.svg";
import { useSelector } from "react-redux";
import {login, logout, selectUser} from "../../reduxStore/storeSlicer";
import { useNavigate } from 'react-router-dom';

function Splash() {
  const {user} = useSelector(state=>state?.appData)
  console.log({user})
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    user ? navigate('/code2/profile',{ replace: true }) : navigate('/code2/signup',{ replace: true });
  }

  useEffect(()=>{
    let inter = setTimeout(()=>{
      handleNavigate()
    },1000)
    return ()=> clearTimeout(inter)
  },[user])

  return (
    <div className="container"> 
      <div className="mainView">
        <div className="logoDiv">
          <div>
            <img src={code2Logo} alt="" className="logoImg" />
          </div>
          <div>
            <img className="logoText" src={code2LogoText} alt="" />
          </div>
          <div className="text1splash">Let’s Green the Planet again!</div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
