import React from "react";
import "./TrackerHeader.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerHeader = ({header1, header2, header3, header4, header5, header6, header7}) => {
  return (
    <div className="tracker__header">
      <div className="tracker__header__list">
        <p>{header1}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header2}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header3}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header4}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header5}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header6}</p>
      </div>
      <div className="tracker__header__list">
        <p>{header7}</p>
      </div>
      <div className="td__pencil__header">
        <FaPencilAlt className="td__pencil__icon" />
      </div>
    </div>
  );
};

export default TrackerHeader;
