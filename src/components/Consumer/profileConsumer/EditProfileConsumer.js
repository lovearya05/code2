import React from 'react'
import NavbarConsumer from '../navbarConsumer/NavbarConsumer'
import "./ProfileConsumer.css";
import "./EditProfileConsumer.css";
import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';

function EditProfileConsumer() {
    const handleSaveBtn=()=>{
        
    }
  return (
    <div>
      <NavbarConsumer />
      <div className="business__profile">
        <div className="profile__front">
          <div className="business__title">
            <p>Edit Profile</p>
          </div>
        </div>
          <div className='allCenter ' >
            <img src={profileIcon} alt='' />
          </div>
      </div>
      <div>

        <div className='paddHori'>
            <div className="edit__input1">
                <p>Name</p>
                <input value={'hii'} type="text" placeholder="Eg. Reshma" />
            </div>

            <div className="edit__input1">
                <p>Contact number</p>
                <input value={''} type="text" placeholder="1234567890" />
            </div>

            <div className="edit__input1">
                <p>Email</p>
                <input value={''} type="text" placeholder="roger@gmail.com" />
            </div>

            <div className="edit__input1">
                <p>Profession</p>
                <input value={''} type="text" placeholder="Engineer" />
            </div>

            <div className="edit__input1">
                <p>Address</p>
                <input value={''} type="text" placeholder="Address line 1" />
            </div>

            <div className="edit__input1">
                {/* <p>Address</p> */}
                <input value={''} type="text" placeholder="Address line 2" />
            </div>

            <div className="edit__input1">
                <p>I typically buy</p>
                <input value={''} type="text" placeholder="Furniture, Grocery" />
            </div>

            <div className="edit__input1">
                <p>I am actively looking to buy</p>
                <input value={''} type="text" placeholder="Dining table" />
            </div>

        </div>
        <div className="profile_save">
          <button onClick={handleSaveBtn}  className="deals__save__button">Save</button>
        </div>
      </div>

      {/* <div className="profile__data">
        <ProfileComponent left="Name" right="Roger Grahame" />
        <ProfileComponent left="Contact no." right="971509128577" />
        <ProfileComponent left="Email" right="roger@gmail.com" />
        <ProfileComponent left="Profession" right="Engineer" />
        <ProfileComponent left="Address" right="1 High Street, London" />
        <ProfileComponent left="I typically buy" right="Furniture, Grocery" />
        <ProfileComponent left="Actively looking to buy" right="Dining table" />

      </div> */}
    </div>
  );
}

export default EditProfileConsumer
