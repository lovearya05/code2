import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'
import "./ProfileConsumer.css";
import { TbPencilMinus } from "react-icons/tb";
import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';

function ProfileConsumer() {
  const navigate = useNavigate();

  const handleEditProfile = ()=>{
    navigate('/code2/editProfileConsumer')
  }
  return (
    <div>
      <NavbarConsumer />
      <div className="business__profile">
        <div className="profile__front">
          <div className="business__title">
            <p>Profile</p>
          </div>
        </div>
          <div className='allCenter ' >
            <img src={profileIcon} alt='' />
            <div className='userText'>Roger Grahame</div>
            <div className="edit__profile" onClick={handleEditProfile} >
              <p>Edit profile</p>
              <TbPencilMinus className="edit__pencil" />
            </div>
          </div>

      </div>
      <div className="profile__data">
        <ProfileComponent left="Name" right="Roger Grahame" />
        <ProfileComponent left="Contact no." right="971509128577" />
        <ProfileComponent left="Email" right="roger@gmail.com" />
        <ProfileComponent left="Profession" right="Engineer" />
        <ProfileComponent left="Address" right="1 High Street, London" />
        <ProfileComponent left="I typically buy" right="Furniture, Grocery" />
        <ProfileComponent left="Actively looking to buy" right="Dining table" />

      </div>
    </div>
  );
}

export default ProfileConsumer
