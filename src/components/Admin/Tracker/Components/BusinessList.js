import React, { useState } from "react";
import "./BusinessList.css";
import AdminTextTemp from "./AdminTextTemp";
import { BsThreeDotsVertical } from "react-icons/bs";

const BusinessList = ({ activate }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedActivate, setClickedActivate] = useState(false);

  const dropEdit = () => {
    setClicked(!clicked);
  };
  const dropActivate = () => {
    setClickedActivate(!clickedActivate);
  };

  return (
    <div className="business__list">
      <div className="business__list_container">
        <div className="business__list__upper">
          <AdminTextTemp />
          <AdminTextTemp />
          <AdminTextTemp />
          <div onClick={dropEdit}>
            <BsThreeDotsVertical className="business__list__icon" />
          </div>
        </div>
        {clicked && clicked ? (
          <div className="edit__admin">
            <p>Edit</p>
            <p>Delete</p>
          </div>
        ) : null}
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
          <div className="activate" onClick={dropActivate}>
            <button onClick={() => dropActivate()}>Activate</button>
          </div>
        ) : (
          <div className="deactivated" onClick={() => dropActivate()}>
            <button>Deactivated</button>
          </div>
        )}
      </div>
      {clickedActivate && clickedActivate ? (
        <div className="edit__admin__activate">
          <p>Activate</p>
          <p>Deactivate</p>
          <p>Reject</p>
        </div>
      ) : null}
    </div>
  );
};

export default BusinessList;
