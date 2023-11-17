import React, { useState } from "react";
import "./Profile.css";
import ProfileBox from "./ProfileBox";
import Person from "./Icons/avatar_7313885.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserProfileType } from "../../reduxStore/storeSlicer";

const Profile = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();
  const handleButtonClick = (title) => {
    setSelectedButton(title);
  };
  const handleGoClick = () => {
    if (selectedButton === "Business") {
      dispatch(updateUserProfileType('business'))
      navigate("/code2/tracker", { replace: true });
    }else if(selectedButton === "Individual"){
      dispatch(updateUserProfileType('consumer'))
      navigate("/code2/TrackerConsumer", { replace: true });
    }
  };

  return (
    <div className="profile">
      <h2>Select Profile Type</h2>
      <div className="boxes">
        <ProfileBox
          title="Individual"
          img={1}
          isSelected={selectedButton === "Individual"}
          onClick={() => handleButtonClick("Individual")}
        />
        <ProfileBox
          title="Business"
          img={2}
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
