import React from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./Factor.css";
import "./FactorList.css";
import FactorComponent from "./FactorComponent";

const FactorList = () => {
  return (
    <div>
      <Navbar />
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
