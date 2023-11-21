import React, { useEffect, useState } from "react";
import "./SupportComponent.css";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { db } from '../../../firebaseConfig';
import {getData} from '../../utilityFunction'



const SupportComponent = ({ userId='', supportProfile='', ticketID='', isTicketOpen=false, supportDescription='' }) => {
  const Navigate = useNavigate();
  
  const [userProfileData, setUserProfileData] = useState({})
  
  const openSupport = (urlLocation) => {
    Navigate(`/code2/${urlLocation}`,{state:{
      userName : userProfileData?.name,
      mobileNumber : userProfileData?.mobileNumber,
      userId: userId,
       supportProfile: supportProfile, 
       ticketID: ticketID, 
       isTicketOpen: isTicketOpen, 
       supportDescription: supportDescription
    }});
  };
  
  useEffect(()=>{
    if(supportProfile){
      supportProfile === 'business' && loadBusinessProfiles ()
      supportProfile === 'consumer' && loadConsumerProfiles ()
    }
  },[supportProfile])

  const loadBusinessProfiles = async ()=>{
    const data = await getData(db,'businessProfile', 'uid', userId, ()=>{}, ()=>{})
    // console.log('loadBusinessProfiles',data)
    if(data) setUserProfileData({
      name : data?.POCName,
      mobileNumber : data?.POCPhone
    })
  }

  
  const loadConsumerProfiles = async ()=>{
    const data = await getData(db,'consumerProfile', 'uid', userId, ()=>{}, ()=>{})
    // console.log('loadBusinessProfiles',data)
    if(data) setUserProfileData({
      name : data?.userName,
      mobileNumber : data?.contactNumber
    })
  }

  

  return (
    <div className="support__component">
      <div className="support__component__upper">
        <div className="support__component__upper__left">
          {ticketID && <p>{ticketID}</p>}
          <h2>{userProfileData?.name}</h2>
          <p>{userProfileData?.mobileNumber}</p>
        </div>
        {isTicketOpen ? (
          <div className="support__component__upper__right">
            <button >
              Open
            </button>
          </div>
        ) : (
          <div className="support__component__upper__right__closed">
            <button>Closed</button>
          </div>
        )}
      </div>
      <div className="support__component__down">
        <p>{supportDescription}</p>
        <FaAngleRight onClick={() => openSupport("admin-supportpage")} 
        className="right__arrow" style={{cursor:'pointer'}} />
      </div>
    </div>
  );
};

export default SupportComponent;
