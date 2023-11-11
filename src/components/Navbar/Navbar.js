import React, { useEffect, useState } from "react";
import "./Navbar.css";
import user from "./image 77.png";
import { MdSubject } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import code2Logo from "../../assets/code2LogoText.svg";
import { RxCross2 } from "react-icons/rx";
import { ImSwitch } from "react-icons/im";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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

  return (
    <div>
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
                location.pathname === "/code2/tracker" ? "greenText" : ""
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
              Carbon Book
            </button>
            <button
              onClick={() => gotoLocation("credit_book")}
              className={`sidebar_button ${
                location.pathname === "/code2/credit_book" ? "greenText" : ""
              }`}
            >
              Carbon Credit Book
            </button>
            <button
              onClick={() => gotoLocation("reward")}
              className={`sidebar_button ${
                location.pathname === "/code2/reward" ? "greenText" : ""
              }`}
            >
              Reward Book
            </button>
            <button
              onClick={() => gotoLocation("deals")}
              className={`sidebar_button ${
                location.pathname === "/code2/deals" ? "greenText" : ""
              }`}
            >
              Update Deals
            </button>
            <button
              onClick={() => gotoLocation("business_profile")}
              className={`sidebar_button ${
                location.pathname === "/code2/business_profile"
                  ? "greenText"
                  : ""
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => gotoLocation("support")}
              className={`sidebar_button ${
                location.pathname === "/code2/support" ? "greenText" : ""
              }`}
            >
              Support
            </button>
          </div>
          {/* <div className="logout"> */}
          <div className="logout__button">
            <ImSwitch className="navbar_icon_logout" />
            <p className="sidebar_button">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
