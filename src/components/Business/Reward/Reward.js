import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Reward.css";
import "../Carbon_Book/Carbon_Book.css";
import CalenderOption from "../Components/CalenderOption";
import BusinessInput from "../Components/BusinessInput";
import Dropdown from "../Components/Dropdown";

const Reward = () => {
  return (
    <div>
      <Navbar />
      <div className="reward">
        <div className="business__title">
          <p>Reward Book</p>
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
        <p>Redemption Value</p>
        <BusinessInput />
        <p>Turnover to be covered with CODE2</p>
        <BusinessInput />
        <p>Reward Distribution ratio</p>
        <Dropdown />
        <p>Currency</p>
        <BusinessInput />
        <p>Maximum Possible Discount</p>
        <BusinessInput />
        <div className="carbon__save">
          <button className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Reward;
