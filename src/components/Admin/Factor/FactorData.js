import React from "react";
import "./FactorHeader.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const FactorData = ({header1, header2, header3, header4}) => {
  return (
    <div className="fd_factor_header">
      <div className="fd_fh_header1">
        <p>{header1}</p>
      </div>
      <div className="fd_fh_header2">
        <p>{header2}</p>
      </div>
      <div className="fd_fh_header3">
        <p>{header3}</p>
      </div>
      <div className="fd_fh_header4">
        <div className="fd_fhheader4_left">
          <p>{header4}</p>
        </div>
        <div className="fd_fhheader4_right">
          <FaPencilAlt className="fd__icon" />
          <RiDeleteBin6Line className="fd__icon" />
        </div>
      </div>
    </div>
  );
};

export default FactorData;