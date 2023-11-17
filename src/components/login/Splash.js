import React, { useEffect } from "react";
import "./splash.css";
import code2Logo from "../../assets/code2Logo.svg";
import code2LogoText from "../../assets/code2LogoText.svg";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "../../reduxStore/storeSlicer";
import { useNavigate } from "react-router-dom";

function Splash() {
  const { user } = useSelector((state) => state?.appData);
  console.log({ user });
  const navigate = useNavigate();
  const handleNavigate = () => {
    user
      ? navigate("/code2/profile", { replace: true })
      : navigate("/code2/signup", { replace: true });
  };

  useEffect(() => {
    let inter = setTimeout(() => {
      handleNavigate();
    }, 1000);
    return () => clearTimeout(inter);
  }, [user]);

  return (
    <div className="splash__screen">
      <div className="splash__leftImage">
        <img className="logoText" src={code2LogoText} alt="" />
      </div>
      <div className="container">
        <div className="splashLogo">
          <img src={code2Logo} alt="" className="logoImg" />
        </div>
        <div className="splashText">
          <img className="logoText" src={code2LogoText} alt="" />
        </div>
        <div className="splashLeftText">
          <h2 className="text1splash">
            Let’s <span className="splashGreen">Green</span> the Planet again!
          </h2>
          <p>Get rewards for your carbon-free shopping</p>
        </div>
      </div>
    </div>
  );
}

export default Splash;
