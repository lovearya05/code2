import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Carbon_Book.css";
import Dropdown from "../Components/Dropdown";
import BusinessInput from "../Components/BusinessInput";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalenderOption from "../Components/CalenderOption";

const Carbon_Book = () => {
  return (
    <div>
      <Navbar />
      <div className="carbon__book">
        <div className="business__title">
          <p>Carbon Book</p>
        </div>
        <div className="carbon__input">
          <p>Country of Renewal generation</p>
          <Dropdown />
          <p>Type of Renewal</p>
          <Dropdown />
          <p>TGenerated Renewal</p>
          <BusinessInput />
          <p>CO2 Reduction </p>
          <BusinessInput />
          <div className="addButton">
            <AiOutlinePlusCircle className="plusButton" />
            <p>Add Other Initiatives</p>
          </div>
          <div className="calender__selection">
            <div className="calender__from">
              <p>From</p>
              <CalenderOption />
            </div>
            <div className="calender__to">
              <p>To</p>
              <CalenderOption />
            </div>
          </div>
          <p>Generation</p>
          <Dropdown />
          <p>TCO2 Reduction </p>
          <Dropdown />
        </div>
        <div className="carbon__save">
          <button className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Carbon_Book;
