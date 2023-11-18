import React from "react";
import "./PaymentTracker.css";
import Navbar from "../../AdminNavbar/Navbar";
import PaymentTrackerComponent from "./PaymentTrackerComponent";
import { FaPlus } from "react-icons/fa6";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
const PaymentTracker = () => {
  return (
    <div>
      <div className="pt__mob__navbar">
        <Navbar />
      </div>
      <div className="pt__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="payment__tracker__admin">
        <div className="payment__tracker__support">
          <h2>Payment Tracker</h2>
        </div>
        <div>
          <PaymentTrackerComponent />
          <PaymentTrackerComponent />
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
