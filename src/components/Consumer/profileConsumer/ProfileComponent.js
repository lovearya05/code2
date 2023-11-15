import React from "react";
import "./ProfileComponent.css";

const ProfileComponent = ({ left='', right='' }) => {
  return (
    <div className="profile__component">
      <p className="component__right">{right}</p>
      <p className="component__left">{left}</p>
    </div>
  );
};

export default ProfileComponent;
