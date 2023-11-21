import React from "react";
import "./FactorHeader.css";

const FactorHeader = () => {
  return (
    <div className="factor__header">
      <div className="fh__header1">
        <p>Serial no</p>
      </div>
      <div className="fh__header2">
        <p>Country</p>
      </div>
      <div className="fh__header3">
        <p>Fuel type</p>
      </div>
      <div className="fh__header4">
        <p>'G' Factor</p>
      </div>
    </div>
  );
};

export default FactorHeader;
