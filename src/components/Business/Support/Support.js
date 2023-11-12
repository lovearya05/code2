import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Support.css";
import { useSelector } from "react-redux";

const Support = () => {
  const {user} = useSelector(state=>state?.appData)

  return (
    <div>
      <Navbar />
      <div className="support">
        <div className="business__title">
          <p>Support</p>
        </div>
        <div className="support__details">
          <p className="support__company">Amazon.com</p>
          <p className="support__contact">+3456 567 89</p>
        </div>
        <div className="support__inputBox">
          <textarea rows="2" placeholder="Write something.." />
        </div>
        <button className="support__post">Post</button>
      </div>
    </div>
  );
};

export default Support;
