import React from "react";
import "./TrackerBox.css";
import code2Logo from "../../../assets/code2Logo.svg";
import code2LogoText from "../../../assets/code2LogoText.svg";

const TrackerBox = ({
  value,
  value2,
  colorBox,
  code2,
  logo,
  logoText,
  show,
}) => {
  const isFullWidth = value2.length > 13; // Adjust the character count as needed

  return (
    <div
      className={`bs_trackerBox ${isFullWidth ? "bs_fullWidth" : ""}`}
      style={{ color: `${colorBox}` }}
    >
      {/* <div className="boxContent"> */}
      {logo && logo ? <img src={code2Logo} alt="code2Logo" /> : null}
      <p className="hightlight__value">{value}</p>
      <div className="tb__highl">
        {show ? (
          <p className="tb__code2">
            {code2}
            {show ? (
              <span style={{}}>2</span>
            ) : (
              <div style={{ display: "None" }}></div>
            )}
          </p>
        ) : (
          <div style={{ display: "None" }}></div>
        )}
        <p className="box_smalText">{value2}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TrackerBox;
