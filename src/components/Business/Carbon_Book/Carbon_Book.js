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
          <p>Generated Renewal</p>
          <BusinessInput />
          <p>CO2 Reduction by Renewals </p>
          <BusinessInput />
          {/*  */}
          <p>Kwh Reduction by other initiatives </p>
          <BusinessInput />
          <p>Country of Reduction </p>
          <BusinessInput />
          <p>CO2 Reduction by other measures </p>
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
          <p>Total CO2 Reduction</p>
          <BusinessInput />
          <p>Total CO2 Reduction(Externally Calculated) </p>
          <BusinessInput />
        </div>
        <div className="carbon__save">
          <button className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Carbon_Book;
