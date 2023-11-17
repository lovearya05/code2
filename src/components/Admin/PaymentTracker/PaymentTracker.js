import React from "react";
import "./PaymentTracker.css";
import Navbar from "../../AdminNavbar/Navbar";
import PaymentTrackerComponent from "./PaymentTrackerComponent";

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
          <PaymentTrackerComponent />
          <PaymentTrackerComponent />
        </div>
      </div>
    </div>
  );
};

export default PaymentTracker;
