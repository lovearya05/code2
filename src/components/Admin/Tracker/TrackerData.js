import React from "react";
import "./TrackerData.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerData = ({ activate }) => {
  return (
    <div className="tracker__header">
      <div className="td_tracker__header__list">
        <p>#4556</p>
      </div>
      <div className="td_tracker__header__list">
        <p>Amazon.com</p>
      </div>
      <div className="td_tracker__header__list">
        <p>Rajat Kumar</p>
      </div>
      <div className="td_tracker__header__list">
        <p>200k</p>
      </div>
      <div className="td_tracker__header__list">
        <p>160k</p>
      </div>
      <div className="td_tracker__header__list">
        <p>160k</p>
      </div>
      {activate ? (
        <div className="td_tracker__header__list__activate">
          <p>Activate</p>
        </div>
      ) : (
        <div className="td_tracker__header__list__deactivate">
          <p>Deactivated</p>
        </div>
      )}

      <div className="td__pencil">
        <FaPencilAlt className="td__pencil__icon" />
      </div>
    </div>
  );
};

export default TrackerData;
