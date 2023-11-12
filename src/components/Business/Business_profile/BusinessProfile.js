import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./BusinessProfile.css";
import { TbPencilMinus } from "react-icons/tb";
import ProfileComponent from "./ProfileComponent";

const BusinessProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="business__profile">
        <div className="profile__front">
          <div className="business__title">
            <p>Profile</p>
          </div>
          <div className="edit__profile">
            <p>Edit profile</p>
            <TbPencilMinus className="edit__pencil" />
          </div>
        </div>
      </div>
      <div className="profile__data">
        <ProfileComponent left="Company" right="Etisalat" />
        <ProfileComponent left="Address" right="Alkifaaf, Dubai, UAE " />
        <ProfileComponent left="Main Business Activity" right="Telecom" />
        <ProfileComponent left="POC Name" right="Simon Williams" />
        <ProfileComponent left="POC Email" right="simon@etisalat.ae" />
        <ProfileComponent left="POC Phone" right="971509128576" />
        <ProfileComponent left="Additional user name" right="Peter Rodric" />
        <ProfileComponent
          left="Additional user email"
          right="peter@etisalat.ae"
        />
        <ProfileComponent left="Additional user phone" right="971509128574" />
        <ProfileComponent left="Additional user name" right="Charles Jacob" />
        <ProfileComponent
          left="Additional user email"
          right="charles@etisalat.ae"
        />
        <ProfileComponent left="Additional user phone" right="971509128575" />
      </div>
    </div>
  );
};

export default BusinessProfile;
