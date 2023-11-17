import React from "react";
import "./PaymentTracker.css";
import Navbar from "../../AdminNavbar/Navbar";
import PaymentTrackerComponent from "./PaymentTrackerComponent";
import { FaPlus } from "react-icons/fa6";
const PaymentTracker = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="payment__tracker__support">
          <h2>Payment Tracker</h2>
        </div>
        <div>
          <PaymentTrackerComponent />
        </div>
        <button className="plusPosition">
          <div className="AddPaymentTracker">
            <FaPlus className="AdminPlus" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PaymentTracker;
