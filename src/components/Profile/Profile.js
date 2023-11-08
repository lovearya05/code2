import React, { useState } from "react";
import "./Profile.css";
import ProfileBox from "./ProfileBox";
import Person from "./Icons/avatar_7313885.svg";

const Profile = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (title) => {
    setSelectedButton(title);
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
        <button>Go→</button>
      </div>
    </div>
  );
};

export default Profile;
