import React from "react";
import "./TrackerDataPt.css";
import { FaPencilAlt } from "react-icons/fa";

const TrackerDataPt = ({ text1='',text2='',text3='',text4='',text5='',text6='',text7='',item={}, setShowModal, setSelectedData  }) => {
  return (
    <div className="tracker__header">
      <div className="pt_tracker__header__list">
        <p>{text1}</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>{text2}</p>
      </div>
      <div className="pt_tracker__header__list_name">
        <p>{text3}</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>{text4}</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>{text5}</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>{text6}</p>
      </div>
      <div className="pt_tracker__header__list">
        <p>{text7}</p>
      </div>
      <div className="td__pencil">
        <FaPencilAlt className="td__pencil__icon" onClick={()=>{
          setShowModal(true)
          setSelectedData(item)
        }} />
      </div>
    </div>
  );
};

export default TrackerDataPt;
