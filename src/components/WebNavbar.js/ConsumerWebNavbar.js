import React, { useState } from "react";
import textLogo from "../../assets/code2LogoText.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./BusinessWebNavbar.css";
import code2Logo from "../../assets/code2Logo.svg";
import { FaChevronDown } from "react-icons/fa6";
import toast from "react-simple-toasts";
import { getAuth, signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";

const ConsumerWebNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openBox, setOpenBox] = useState(false);
  const isTrackerPage = location.pathname.includes("/tracker");

  const gotoLocation = (urlLocation) => {
    navigate(`/code2/${urlLocation}`);
  };

  const openBoxFunc = () => {
    setOpenBox(!openBox);
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
      {openBox ? (
        <div className="logout__consumer">
          <div
            className="logout__consumer__top"
            style={{ borderBottom: "1px solid #404040" }}
          >
            <FaRegUserCircle className="lc_view__icon" />
            <button onClick={() => gotoLocation("profileConsumer")}>
              View Profile
            </button>
          </div>
          <div className="logout__consumer__bottom">
            <ImSwitch className="lc_logout__icon" />
            <button onClick={handleLogOut}>Logout</button>
          </div>
        </div>
      ) : null}
      {/* <div onClick={handleLogOut} className="businessWebNavbar__right"> */}
      <div onClick={openBoxFunc} className="businessWebNavbar__right">
        <p>C</p>
        <FaChevronDown className="bw__userIcon" />
      </div>
    </div>
  );
};

export default ConsumerWebNavbar;
