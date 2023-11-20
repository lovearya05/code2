import React from "react";
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import "./RedeemCODE2.css";
import code2Logo from "../../../assets/code2Logo.svg";
import code2LogoText from "../../../assets/code2LogoText.svg";
import ConsumerWebNavbar from "../../WebNavbar.js/ConsumerWebNavbar";

function RedeemCODE2() {
  return (
    <div className="reedemCode">
      {/* {loading && <Loader />} */}
      <div className="reedem__mob__navbar">
        <NavbarConsumer />
      </div>
      <div className="reedem__web__navbar">
        <ConsumerWebNavbar />
      </div>
      <div className="business__title">
        <p>Redeem CODE2</p>
      </div>
      <div className="reedem__code">
        <div className="allCenter marginTop16">
          <div className="redeemCard">
            <div className="flexColSpaceBtw">
              <div>
                <div className="text14 colorGry">Digital Wallet</div>
                <div className="text14 colorWhite marginTop16">223 445 660</div>
              </div>
              <div className="text14 colorGry">Preeti Gupta</div>
            </div>

            <div className="flexColCenter">
              <img src={code2Logo} alt="" style={{ height: "50px" }} />
              <img
                className="marginTop10"
                style={{ height: "14px" }}
                src={code2LogoText}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="allCenter marginTop16">
          <div className="qrCode marginTop16"></div>
        </div>
      </div>
    </div>
  );
}

export default RedeemCODE2;
