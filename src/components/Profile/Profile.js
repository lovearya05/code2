import React, { useState } from "react";
import "./Profile.css";
import ProfileBox from "./ProfileBox";
import Person from "./Icons/avatar_7313885.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };
  const handleGoClick = () => {
    if (selectedButton === "Business") {
      navigate("/code2/tracker", { replace: true });
    }
  };

  return (
    <div className="profile">
      <h2>Select Profile Type</h2>
      <div className="boxes">
        <ProfileBox
          title="Individual"
          isSelected={selectedButton === "Individual"}
          onClick={() => handleButtonClick("Individual")}
        />
        <ProfileBox
          title="Business"
          isSelected={selectedButton === "Business"}
          onClick={() => handleButtonClick("Business")}
        />
      </div>

      <div className="button">
        <button onClick={() => handleGoClick()}>Go Next</button>
      </div>
    </div>
  );
};

export default Profile;
