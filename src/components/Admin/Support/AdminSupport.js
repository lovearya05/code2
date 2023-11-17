import React from "react";
import "./AdminSupport.css";
import SupportComponent from "./SupportComponent";
import Navbar from "../../AdminNavbar/Navbar";

const AdminSupport = () => {
  return (
    <div>
      <Navbar />
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
