import React, { useState } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdminTracker.css";
import TrackerBox from "../../Business/Tracker/TrackerBox";
import ListComponent from "./Components/BusinessList";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";

const AdminTracker = () => {
  const [change, setChange] = useState(true);
  const changeFunction = (value) => {
    setChange(value);
  };
  return (
    <div>
      <div className="admin__mob__navbar">
        <Navbar />
      </div>
      <div className="admin__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="admin">
        <div className="admin__button">
          <button
            className={`${change ? " admin__button__clicked" : null} `}
            onClick={() => changeFunction(true)}
          >
            Business(20)
          </button>
          <button
            className={`${!change ? " admin__button__clicked" : null} `}
            onClick={() => changeFunction(false)}
          >
            Individual(10)
          </button>
        </div>
        <div>
          {change && change ? (
            <div>
              <ListComponent activate={true} />
              <ListComponent activate={false} />
              <ListComponent activate={false} />
              <ListComponent activate={true} />
            </div>
          ) : (
            <div>
              <ListComponent activate={true} />
              <ListComponent activate={false} />
              <ListComponent activate={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTracker;
