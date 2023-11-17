import React from "react";
import "./PaymentTrackerComponent.css";
import AdminTextTemp from "../Tracker/Components/AdminTextTemp";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./PaymentTrackerComponent.css"

const BusinessList = ({ activate }) => {
  return (
    <div className="business__list">
      <div className="business__list_container">
        <div className="business__list__upper">
          <AdminTextTemp />
          <AdminTextTemp />
          <AdminTextTemp />
          <div>
            <BsThreeDotsVertical className="business__list__icon" />
          </div>
        </div>
      </div>
      <div className="business__list__down">
        <div className="business__list__down__left">
          <h2>Etisalat</h2>
          <p>Simon Williams</p>
        </div>
        <div className="business__list__down__no">
          <p>971509128576</p>
        </div>
        <div className="edit__fee">
          <button>Edit fee</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessList;
