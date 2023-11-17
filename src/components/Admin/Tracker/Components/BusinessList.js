import React from "react";
import "./BusinessList.css";
import AdminTextTemp from "./AdminTextTemp";
import { BsThreeDotsVertical } from "react-icons/bs";

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
        {activate && activate ? (
          <div className="activate">
            <button>Activate</button>
          </div>
        ) : (
          <div className="deactivated">
            <button>Deactivated</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessList;
