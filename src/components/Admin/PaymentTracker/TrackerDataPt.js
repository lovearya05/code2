import React from "react";
import "./TrackerDataPt.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerDataPt = ({ activate }) => {
  return (
    <div className="tracker__header">
      <div className="pt_tracker__header__list">
        <p>#4556</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>Amazon.com</p>
      </div>
      <div className="pt_tracker__header__list_name">
        <p>Rajat Kumar</p>
        <p>+3456 567 89</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>200k</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>160k</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>160k</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>20%</p>
      </div>

      <div className="td__pencil">
        <FaPencilAlt className="td__pencil__icon" />
      </div>
    </div>
  );
};

export default TrackerDataPt;
