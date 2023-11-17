import React, { useEffect, useState } from "react";
import "./Navbar.css";
import user from "./image 77.png";
import { MdSubject } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import code2Logo from "../../assets/code2LogoText.svg";
import { RxCross2 } from "react-icons/rx";
import { ImSwitch } from "react-icons/im";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-simple-toasts";

const Navbar = () => {
  const location = useLocation();
  const isTrackerPage = location.pathname.includes("/tracker");
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const gotoLocation = (urlLocation) => {
    setSidebarOpen(!isSidebarOpen);
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
    <div className="nav" style={{ zIndex: 5, position: "relative" }}>
      <div className={`navbar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <button
          style={{ background: "none", border: "none" }}
          onClick={handleSidebarToggle}
        >
          <MdSubject className="navbar_icon_sidebar" />
        </button>
        <button style={{ background: "none", border: "none" }}>
          <BiSolidUser className="navbar_icon_user" />
        </button>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar_open_navbar" onClick={handleSidebarClose}>
          <RxCross2 className="navbar_icon_sidebar" />
          <img src={code2Logo} alt="code2Logo" />
        </div>
        <div>
          <div className="upperSideNavigation">
            <button
              onClick={() => gotoLocation("tracker")}
              className={`sidebar_button ${
                location.pathname === "/code2/admin" ? "greenText" : ""
              }`}
            >
              Tracker
            </button>
            <button
              onClick={() => gotoLocation("carbon_book")}
              className={`sidebar_button ${
                location.pathname === "/code2/carbon_book" ? "greenText" : ""
              }`}
            >
              Payment Tracker
            </button>
            <button
              onClick={() => gotoLocation("credit_book")}
              className={`sidebar_button ${
                location.pathname === "/code2/credit_book" ? "greenText" : ""
              }`}
            >
              Set 'G' Factor
            </button>
            <button
              onClick={() => gotoLocation("reward")}
              className={`sidebar_button ${
                location.pathname === "/code2/reward" ? "greenText" : ""
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => gotoLocation("deals")}
              className={`sidebar_button ${
                location.pathname === "/code2/deals" ? "greenText" : ""
              }`}
            >
              Support
            </button>
          </div>
          {/* <div className="logout"> */}
          <div onClick={handleLogOut} className="logout__button">
            <ImSwitch className="navbar_icon_logout" />
            <p className="sidebar_button">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
