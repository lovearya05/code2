import React from "react";
import textLogo from "../../assets/code2LogoText.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./BusinessWebNavbar.css";
import code2Logo from "../../assets/code2Logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import toast from "react-simple-toasts";
import { getAuth, signOut } from "firebase/auth";

const AdminWebNavbar = () => {
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
          onClick={() => gotoLocation("admin-tracker")}
          className={`bw_button ${
            location.pathname === "/code2/admin-tracker" ? "bw__greenText" : ""
          }`}
        >
          Tracker
        </button>
        <button
          onClick={() => gotoLocation("payment-tracker")}
          className={`bw_button ${
            location.pathname === "/code2/payment-tracker"
              ? "bw__greenText"
              : ""
          }`}
        >
          Payment Tracker
        </button>
        <button
          onClick={() => gotoLocation("factor")}
          className={`bw_button ${
            location.pathname === "/code2/factor" ? "bw__greenText" : ""
          }`}
        >
          Set ’G’ Factor
        </button>
        <button
          onClick={() => gotoLocation("admin-support")}
          className={`bw_button ${
            location.pathname === "/code2/admin-support" ? "bw__greenText" : ""
          }`}
        >
          Support
        </button>
      </div>
      <div onClick={handleLogOut} className="businessWebNavbar__right">
        <p>A</p>
        <FaChevronDown className="bw__userIcon" />
      </div>
    </div>
  );
};

export default AdminWebNavbar;