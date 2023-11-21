import React from "react";
import "./TrackerBoxConsumer.css";

const TrackerBox = ({ value, value2, colorBox }) => {
  const isFullWidth = value2.length > 17; // Adjust the character count as needed

  const newValue = value2.split(" ");
  const part1 = newValue[0]; // "CO2"
  const allCharacters = part1.split(""); // ["C", "O", "2"]
  const withoutLastCharacter = allCharacters.slice(0, -1).join(""); // "CO"

  const lastCharacter = part1.charAt(part1.length - 1); // "2"
  const part2 = newValue.slice(1).join(" "); // "Earned"

  return (
    <div
      className={`trackerBox ${isFullWidth ? "fullWidth" : ""}`}
      style={{ color: `${colorBox}` }}
    >
      <p className="hightlight__value" style={{ color: `${colorBox}` }}>
        {value}
      </p>
      <p className="box_smalText__web">
        <span className="highlight__code2">
          {withoutLastCharacter}
          <span className="lastCharacter">{lastCharacter} </span>
        </span>
        {part2}
      </p>
      <p className="box_smalText__mob">{value2}</p>
      {/* </div> */}
    </div>
  );
};

export default TrackerBox;