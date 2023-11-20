import React from "react";
import textLogo from "../../assets/code2LogoText.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./BusinessWebNavbar.css";
import code2Logo from "../../assets/code2Logo.svg";
import { FaChevronDown } from "react-icons/fa6";

const ConsumerWebNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTrackerPage = location.pathname.includes("/tracker");

  const gotoLocation = (urlLocation) => {
    navigate(`/code2/${urlLocation}`);
  };
  return (
    <div className="bw_navbar">
      <div className="businessWebNavbar__left">
        <img className="bw_logo" src={code2Logo} alt="code2Logo" />
        <img className="bw_logoText" src={textLogo} alt="code2LogoText" />
      </div>
      <div className="businessWebNavbar__middle">
        <button
          onClick={() => gotoLocation("trackerConsumer")}
          className={`bw_button ${
            location.pathname === "/code2/trackerConsumer"
              ? "bw__greenText"
              : ""
          }`}
        >
          Tracker
        </button>
        <button
          onClick={() => gotoLocation("exploreStoreConsumer")}
          className={`bw_button ${
            location.pathname === "/code2/exploreStoreConsumer"
              ? "bw__greenText"
              : ""
          }`}
        >
          Explore Stores
        </button>
        <button
          onClick={() => gotoLocation("redeemCODE2")}
          className={`bw_button ${
            location.pathname === "/code2/redeemCODE2" ? "bw__greenText" : ""
          }`}
        >
          Reedem CODE2
        </button>
        <button
          onClick={() => gotoLocation("profileConsumer")}
          className={`bw_button ${
            location.pathname === "/code2/profileConsumer"
              ? "bw__greenText"
              : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => gotoLocation("supportConsumer")}
          className={`bw_button ${
            location.pathname === "/code2/supportConsumer"
              ? "bw__greenText"
              : ""
          }`}
        >
          Support
        </button>
      </div>
      <div className="businessWebNavbar__right">
        <p>B</p>
        <FaChevronDown className="bw__userIcon" />
      </div>
    </div>
  );
};

export default ConsumerWebNavbar;
