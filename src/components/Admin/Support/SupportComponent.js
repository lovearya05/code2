import React from "react";
import "./SupportComponent.css";
import { FaAngleRight } from "react-icons/fa";

const SupportComponent = ({open}) => {
  return (
    <div className="support__component">
      <div className="support__component__upper">
        <div className="support__component__upper__left">
          <p>TK10103456</p>
          <h2>Roger Grahame</h2>
          <p>+3456 567 89</p>
        </div>
        {open && open ? (
          <div className="support__component__upper__right">
            <button>Open</button>
          </div>
        ) : (
          <div className="support__component__upper__right__closed">
            <button>Closed</button>
          </div>
        )}
      </div>
      <div className="support__component__down">
        <p>My points deducted automaically..</p>
        <FaAngleRight className="right__arrow" />
      </div>
    </div>
  );
};

export default SupportComponent;
