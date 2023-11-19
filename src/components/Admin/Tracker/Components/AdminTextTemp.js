import React from "react";
import "./AdminTextTemp.css";

const AdminTextTemp = ({countNumber=0, text=''}) => {
  return (
    <div className="adminText">
      <h2>{countNumber}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AdminTextTemp;
