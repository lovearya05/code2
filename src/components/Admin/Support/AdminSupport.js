import React from "react";
import "./AdminSupport.css";
import SupportComponent from "./SupportComponent";
import Navbar from "../../AdminNavbar/Navbar";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";

const AdminSupport = () => {
  return (
    <div>
      <div className="sp__mob__navabr">
        <Navbar />
      </div>
      <div className="sp__web__navabr">
        <AdminWebNavbar />
      </div>
      <div className="adminSupport">
        <div className="admin__support">
          <h2>Support</h2>
        </div>
        <div>
          <SupportComponent open={false} />
          <SupportComponent open={true} />
          <SupportComponent open={false} />
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
