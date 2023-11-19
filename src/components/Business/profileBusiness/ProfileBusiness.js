import React, { useEffect, useState } from 'react'
// import NavbarConsumer from '../navbarConsumer/NavbarConsumer'
import "./ProfileBusiness.css";
import { TbPencilMinus } from "react-icons/tb";
import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';
import { getData } from '../../utilityFunction';
import { db } from '../../../firebaseConfig';
import { useSelector } from 'react-redux';
import Loader from '../../login/EssentialComponents/Loader';
import Navbar from "../../Navbar/Navbar";
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";



function ProfileBusiness() {
  const [profileData, setProfileData] = useState({
    company: '',
    address: '',
    mainBusinessActivity: '',
    additionalBusinessActivity: '',
    POCName: '',
    POCEmail: '',
    POCPhone: '',
    additionalName1: '',
    additionalEmail1: '',
    additionalPhone1: '',
    additionalName2: '',
    additionalEmail2: '',
    additionalPhone2: '',
})
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)

  useEffect(()=>{
    loadInitalData()
  },[user])
  const loadInitalData = async()=>{
      const data = await getData(db, 'businessProfile', 'uid', user?.uid, ()=>setLaoding(true), ()=>setLaoding(false))
      if(data){
          setProfileData({
            company: data?.company,
            address: data?.address,
            mainBusinessActivity: data?.mainBusinessActivity,
            additionalBusinessActivity: data?.additionalBusinessActivity,
            POCName: data?.POCName,
            POCEmail: data?.POCEmail,
            POCPhone: data?.POCPhone,
            additionalName1: data?.additionalName1,
            additionalEmail1: data?.additionalEmail1,
            additionalPhone1: data?.additionalPhone1,
            additionalName2: data?.additionalName2,
            additionalEmail2: data?.additionalEmail2,
            additionalPhone2: data?.additionalPhone2,
          })
      }
  } 

  const navigate = useNavigate();

  const handleEditProfile = ()=>{
    navigate('/code2/EditProfileBusiness')
  }
  return (
    <div>
      {loading && <Loader />}
      {/* <NavbarConsumer /> */}
      <div className="BusinessMobNavbar">
        <Navbar />
      </div>
      <div className="BusinessWebNavbar">
        <BusinessWebNavbar />
      </div>

      <div className="business__profile">
        <div className="profile__front">
          <div className="business__title">
            <p>Profile</p>
          </div>
        </div>
          <div className='allCenter ' >
            <img src={profileIcon} alt='' />
            <div className='userText'>{profileData?.userName}</div>
            <div className="edit__profile" onClick={handleEditProfile} >
              <p>Edit profile</p>
              <TbPencilMinus className="edit__pencil" />
            </div>
          </div>

      </div>
      <div className="profile__data">
        <ProfileComponent left="Company" right={profileData.company} />
        <ProfileComponent left="Address" right={profileData.address} />
        <ProfileComponent left="Main Business Activity" right={profileData?.mainBusinessActivity} />
        <ProfileComponent left="Additional Business Activity" right={profileData?.additionalBusinessActivity} />
        <ProfileComponent left="POC Name" right={profileData?.POCName} />
        <ProfileComponent left="POC Email" right={profileData?.POCEmail}/>
        <ProfileComponent left="POC Phone" right={profileData?.POCPhone} />
        <ProfileComponent left="Additional user name" right={profileData.additionalName1} />
        <ProfileComponent left="Additional user email" right={profileData.additionalEmail1} />
        <ProfileComponent left="Additional user phone" right={profileData.additionalPhone1} />
        <ProfileComponent left="Additional user name" right={profileData.additionalName2} />
        <ProfileComponent left="Additional user email" right={profileData.additionalEmail2} />
        <ProfileComponent left="Additional user phone" right={profileData.additionalPhone2} />

      </div>
    </div>
  );
}

export default ProfileBusiness
