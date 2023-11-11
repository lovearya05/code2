import React from "react";
import "./Tracker.css";
import Navbar from "../../Navbar/Navbar";
import TrackerBox from "./TrackerBox";

const Tracker = () => {
  return (
    <div>
      <Navbar />
      <div className="tracker">
        <div className="business__title">
          <p>Tracker</p>
        </div>
        <div className="business__boxes">
          <TrackerBox
            value="250,000"
            colorBox="#f0ad00"
            value2="CO2 Reduction"
          />
          <TrackerBox
            value="250,000"
            colorBox="#FFF"
            value2="CODE2 Generated"
          />
          <TrackerBox
            value="150,000"
            colorBox="#FFF"
            value2="CODE2 Distributed"
          />
          <TrackerBox value="85,000" colorBox="#FFF" value2="CODE2 Redeemed" />
          <TrackerBox
            value="42,500"
            colorBox="#FFF"
            value2="Code2 Redeemed Value"
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
