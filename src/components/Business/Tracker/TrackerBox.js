import React from "react";
import "./TrackerBox.css";

const TrackerBox = ({ value, value2, colorBox }) => {
  const isFullWidth = value2.length > 17; // Adjust the character count as needed

  return (
    <div
      className={`trackerBox ${isFullWidth ? "fullWidth" : ""}`}
      style={{ color: `${colorBox}` }}
    >
      {/* <div className="boxContent"> */}
      <p className="hightlight__value">{value}</p>
      <p className="box_smalText">{value2}</p>
      {/* </div> */}
    </div>
  );
};

export default TrackerBox;
