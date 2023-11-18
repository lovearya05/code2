import React from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./Factor.css";
import "./FactorList.css";
import FactorComponent from "./FactorComponent";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";

const FactorList = () => {
  return (
    <div>
      <div className="factor__mob__navbar">
        <Navbar />
      </div>
      <div className="factor__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="factor__list">
        <div className="factor__listTitle">
          <h2>Factor list</h2>
        </div>
        <div>
          <FactorComponent />
          <FactorComponent />
        </div>
      </div>
    </div>
  );
};

export default FactorList;
