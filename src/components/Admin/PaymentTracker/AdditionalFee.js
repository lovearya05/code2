import React from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdditionalFee.css";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import { useNavigate } from "react-router-dom";
const AdditionalFee = () => {
  const navigate = useNavigate();
  const goBackFunction = () => {
    navigate(-1);
  };
  return (
    <div>
      <Navbar />
      <div className="additional__fee">
        <div className="additionalFee">
          <h2>Additional fee</h2>
          <button onClick={goBackFunction}>Back</button>
        </div>
        <div className="additionalFee__Form">
          <p>Registered Company</p>
          <Dropdown />
          <p>Subscription Fee</p>
          <Dropdown />
          <p>Collected Sub Fee</p>
          <Business__Input />
          <p>Referral %age</p>
          <Business__Input />
          <p>Referral Fee Value</p>
          <Business__Input />
          <p>Collected Ref. Fee</p>
          <Business__Input />
          <p>Total Calculated</p>
          <Business__Input />
          <div className="additional__save">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFee;
