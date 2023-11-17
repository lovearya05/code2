import React from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdminSupport.css";
import { FaCaretDown } from "react-icons/fa";

const AdminSupportPage = () => {
  return (
    <div>
      <Navbar />
      <div className="admin__support__page">
        <div className="admin__support__page__title">
          <h2>Support</h2>
          <button>Back</button>
        </div>
        <div className="adminSupport__page__middle">
          <p>TK10103456</p>
          <div className="name__individual">
            <h2>Rajat Kumar</h2>
            <button>Individual</button>
          </div>
          <p>+3456 567 89</p>
        </div>
        <div className="support__subject">
          <p>
            My points deducted automaically. I wasn’t able to use it pay for the
            items i bought in the refered store. I need a refund of the points
            in my account as soon as possible.
          </p>
        </div>
        <div className="support__changeStatus">
          <p>Change status</p>
          <div className="open__button">
            <button>Open</button>
            <FaCaretDown className="open__button__down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSupportPage;
