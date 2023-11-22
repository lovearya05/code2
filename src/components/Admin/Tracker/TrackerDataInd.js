import React from "react";
import "./TrackerData.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerDataInd = ({ activate, text1='',text2='',text3='',text4='',text5='',text6='', }) => {
  return (
    <div className="tracker__header">
      <div className="td_tracker__header__list">
        <p>{text1}</p>
      </div>
      <div className="td_tracker__header__list">
        <p>{text2}</p>
      </div>
      <div className="td_tracker__header__list">
        <p>{text3}</p>
      </div>
      <div className="td_tracker__header__list">
        <p>{text4}</p>
      </div>
      <div className="td_tracker__header__list">
        <p>{text5}</p>
      </div>
      <div className="td_tracker__header__list">
        <p>{text6}</p>
      </div>
      {activate ? (
        <div className="tdind_tracker__header__list__activate">
          <p>Activate</p>
          <FaPencilAlt className="td__pencil__icon" />
        </div>
      ) : (
        <div className="tdind_tracker__header__list__deactivate">
          <p>Deactivated</p>
          <FaPencilAlt className="td__pencil__icon" />
        </div>
      )}
    </div>
  );
};

export default TrackerDataInd;
