import React from "react";
import "./Factor.css";
import Navbar from "../../AdminNavbar/Navbar";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";

const Factor = () => {
  return (
    <div>
      <div className="factor__mob__navbar">
        <Navbar />
      </div>
      <div className="factor__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="factor">
        <div className="factor__title">
          <h2>Factor</h2>
        </div>
        <div className="factor__form">
          <p>Country</p>
          <Dropdown options={["🇦🇪UAE", "🇬🇧London", "🇦🇹Vienna"]} />
          <p>Fuel type</p>
          <Dropdown options={["🟡Solar", "💧Hydro", "Tidal"]} />
          <p>Multiplying factor</p>
          <Business__Input />
          <div className="factor__save">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factor;
