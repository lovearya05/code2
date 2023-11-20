import React, { useEffect, useState } from "react";
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import "./ProfileConsumer.css";
import { TbPencilMinus } from "react-icons/tb";
import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';
import { getData } from '../../utilityFunction';
import { db } from '../../../firebaseConfig';
import { useSelector } from 'react-redux';
import Loader from '../../login/EssentialComponents/Loader';
import ConsumerWebNavbar from "../../WebNavbar.js/ConsumerWebNavbar";



function ProfileConsumer() {
  const [profileData, setProfileData] = useState({userName:'', contactNumber : '',
  email:'', profession:'', address1:'', address2:'', typicallyBuy:'', lookingToBuy:''})
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)

  useEffect(()=>{
    loadInitalData()
  },[user])
  const loadInitalData = async()=>{
      const data = await getData(db, 'consumerProfile', 'uid', user?.uid, ()=>setLaoding(true), ()=>setLaoding(false))
      if(data){
          setProfileData({
          userName:data?.userName,
          contactNumber : data?.contactNumber,
          email:data?.email,
          profession:data?.profession,
          address1:data?.address1,
          address2:data?.address2,
          typicallyBuy:data?.typicallyBuy,
          lookingToBuy:data?.lookingToBuy,
          })
      }
  } 

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/code2/editProfileConsumer");
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="pc__mob__navbar">
        <NavbarConsumer />
      </div>
      <div className="pc__web__navbar">
        <ConsumerWebNavbar />
      </div>
      <div className="consumer__profile">
        <div className="business__profile">
          <div className="profile__front">
            {/* <div className="business__title"> */}
            <p>Profile</p>
            {/* </div> */}
          </div>
          <div className="allCenter ">
            <img src={profileIcon} alt="" />
            <div className="userText">{profileData?.userName}</div>
            <div className="edit__profile" onClick={handleEditProfile}>
              <p>Edit profile</p>
              <TbPencilMinus className="edit__pencil" />
            </div>
          </div>
        </div>
        <div className="profile__data">
          <ProfileComponent left="Name" right={profileData?.userName} />
          <ProfileComponent
            left="Contact no."
            right={profileData?.contactNumber}
          />
          <ProfileComponent left="Email" right={profileData?.email} />
          <ProfileComponent left="Profession" right={profileData?.profession} />
          <ProfileComponent
            left="Address"
            right={profileData?.address1 + ", " + profileData?.address2}
          />
          <ProfileComponent
            left="I typically buy"
            right={profileData?.typicallyBuy}
          />
          <ProfileComponent
            left="Actively looking to buy"
            right={profileData?.lookingToBuy}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileConsumer;
