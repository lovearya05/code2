import React from "react";
import "./TrackerData.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerData = ({ value = 'activate', isActivate = false, text1 = '', text2 = '', text3 = '', text4 = '', text5 = '', text6 = '', text7 = '' }) => {
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
      <div className="td_tracker__header__list">
        <p>{text7}</p>
      </div>

      {value == "activate" ? (
        <div className="td_tracker__header__list__activate">
          <p>Activate</p>
        </div>
      ) : value == "deactivate" ? (
        <div className="td_tracker__header__list__deactivate">
          <p>Deactivated</p>
        </div>
      ) : (
        <div className="td_tracker__header__list__pending">
          <div className="td_tracker__header__list">
            <p>{'Pending'}</p>
          </div>
        </div>
      )}

      <div className="td__pencil">
        <FaPencilAlt className="td__pencil__icon" />
      </div>
    </div>

  );
};

export default TrackerData;
