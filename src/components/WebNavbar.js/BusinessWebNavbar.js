import React from "react";
import textLogo from "../../assets/code2LogoText.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./BusinessWebNavbar.css";
import code2Logo from "../../assets/code2Logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import toast from "react-simple-toasts";
import { getAuth, signOut } from "firebase/auth";

const BusinessWebNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTrackerPage = location.pathname.includes("/tracker");

  const gotoLocation = (urlLocation) => {
    navigate(`/code2/${urlLocation}`);
  };
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast("Logout successful.");
        navigate(`/code2/login`);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="bw_navbar">
      <div className="businessWebNavbar__left">
        <img className="bw_logo" src={code2Logo} alt="code2Logo" />
        <img className="bw_logoText" src={textLogo} alt="code2LogoText" />
      </div>
      <div className="businessWebNavbar__middle">
        <button
          onClick={() => gotoLocation("tracker")}
          className={`bw_button ${
            location.pathname === "/code2/tracker" ? "bw__greenText" : ""
          }`}
        >
          Tracker
        </button>
        <button
          onClick={() => gotoLocation("carbon_book")}
          className={`bw_button ${
            location.pathname === "/code2/carbon_book" ? "bw__greenText" : ""
          }`}
        >
          Carbon Book
        </button>
        <button
          onClick={() => gotoLocation("credit_book")}
          className={`bw_button ${
            location.pathname === "/code2/credit_book" ? "bw__greenText" : ""
          }`}
        >
          Carbon Credit Book
        </button>
        <button
          onClick={() => gotoLocation("reward")}
          className={`bw_button ${
            location.pathname === "/code2/reward" ? "bw__greenText" : ""
          }`}
        >
          Reward Book
        </button>
        <button
          onClick={() => gotoLocation("deals")}
          className={`bw_button ${
            location.pathname === "/code2/deals" ? "bw__greenText" : ""
          }`}
        >
          Update Deals
        </button>
        <button
          onClick={() => gotoLocation("ProfileBusiness")}
          className={`bw_button ${
            location.pathname === "/code2/ProfileBusiness" ? "bw__greenText" : ""
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => gotoLocation("support")}
          className={`bw_button ${
            location.pathname === "/code2/support" ? "bw__greenText" : ""
          }`}
        >
          Support
        </button>
      </div>
      <div onClick={handleLogOut} className="businessWebNavbar__right">
        <p>B</p>
        <FaChevronDown className="bw__userIcon" />
      </div>
    </div>
  );
};

export default BusinessWebNavbar;
