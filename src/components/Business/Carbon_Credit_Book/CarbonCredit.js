import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./CarbonCredit.css";
import CalenderOption from "../Components/CalenderOption";
import "../Carbon_Book/Carbon_Book.css";
import Dropdown from "../Components/Dropdown";
import StatusDropdown from "../Components/StatusDropdown";
import CarbonCreditStatus from "../Components/CarbonCreditStatus";
import BusinessInput from "../Components/BusinessInput";

const CarbonCredit = () => {
  return (
    <div>
      <Navbar />
      <div className="credit__book">
        <div className="business__title">
          <p>Carbon Credit Book</p>
        </div>
        <div className="calender__selection">
          <div className="calender__from">
            <p>From</p>
            <CalenderOption />
          </div>
          <div className="calender__to">
            <p>To</p>
            <CalenderOption />
          </div>
        </div>
        <p>Carbon emission reduction</p>
        <BusinessInput option={true} />
        <p>Select Standards</p>
        <div className="status__dropdown">
          <CarbonCreditStatus />
          <StatusDropdown />
        </div>
        <p>Select Validation</p>
        <div className="status__dropdown">
          <CarbonCreditStatus />
          <StatusDropdown />
        </div>
        <p>Carbon Credit Register</p>
        <div className="status__dropdown">
          <CarbonCreditStatus />
          <StatusDropdown />
        </div>
        <p>Carbon Credits Trade</p>
        <div className="status__dropdown">
          <CarbonCreditStatus />
          <StatusDropdown />
        </div>
        <div className="carbon__save">
          <button className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredit;
