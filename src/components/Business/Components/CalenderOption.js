import React from "react";
import "./CalenderOption.css";
import { SlCalender } from "react-icons/sl";

const CalenderOption = () => {
  return (
    <div className="calender__option">
      <p>Select</p>
      <SlCalender className="calender" />
    </div>
  );
};

export default CalenderOption;
