import React from "react";
import "./FactorHeader.css";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const FactorData = ({header1, header2, header3, header4}) => {
  return (
    <div className="fd__factor__header">
      <div className="fd__fh__header1">
        <p>{header1}</p>
      </div>
      <div className="fd__fh__header2">
        <p>{header2}</p>
      </div>
      <div className="fd__fh__header3">
        <p>{header3}</p>
      </div>
      <div className="fd__fh__header4">
        <div className="fd__fh__header4__left">
          <p>{header4}</p>
        </div>
        <div className="fd__fh__header4__right">
          <FaPencilAlt className="fd__icon" />
          <RiDeleteBin6Line className="fd__icon" />
        </div>
      </div>
    </div>
  );
};

export default FactorData;
