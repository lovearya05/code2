import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./UpdateDeals.css";

const UpdateDeals = () => {
  return (
    <div>
      <Navbar />
      <div className="deals">
        <div className="business__title">
          <p>New Deals</p>
        </div>
        <div className="deals__input">
          <div className="deals__input1">
            <p>Enter items for discount</p>
            <input type="text" placeholder="Eg.Home decor" />
          </div>
          <div className="deals__input2">
            <p>Set Max Discount</p>
            <input type="text" placeholder="Eg. 20% " />
          </div>
        </div>
        <div className="deals__save">
          <button className="deals__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDeals;
