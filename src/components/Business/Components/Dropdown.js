import React, { useState } from "react";
import "./Dropdown.css";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = ({options=[], setValue=()=>{}, currValue=''}) => {
  const [dropdown, setDropdown] = useState(false);

  const saveFunction = (chosenValue) => {
    setValue(chosenValue);
    setDropdown(false);
  };

  return (
    <div>
      <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
        <div className="dropdown__option">{currValue}</div>
        <div className="dropdown__button">
          <AiOutlineDown className="down__arrow" />
        </div>
      </div>
      {dropdown ? (
        <div className="drop_menu">
          {options.map((val, i)=>{
            return(
              <p key={i} onClick={() => saveFunction(val)}>{val}</p>
            )
          })}
          {/* <p onClick={() => saveFunction("Verified carbon standard(VCS)")}>
            Verified carbon standard(VCS)
          </p>
          <p onClick={() => saveFunction("Gold standard")}>Gold standard</p> */}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
