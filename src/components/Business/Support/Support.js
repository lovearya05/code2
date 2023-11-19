import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Support.css";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";
import {getData} from '../../utilityFunction'

const Support = () => {
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);

  const [issue, setIssue] = useState('');
  const [userProfileData, setUserProfileData] = useState({})

  useEffect(()=>{
    if(user){
      loadBusinessProfiles ()
    }
  },[user])

  const loadBusinessProfiles = async ()=>{
    const data = await getData(db,'businessProfile', 'uid', user?.uid, ()=>{}, ()=>{})
    console.log('loadBusinessProfiles',data)
    if(data) setUserProfileData({
      name : data?.POCName,
      mobileNumber : data?.POCPhone
    })
    // console.log('profiles', data)
  }


  const handlePost = () => {
    if (!issue || issue.length == 0) {
      toast("please enter message first");
      return;
    }
    submitTicket()
  }

  const submitTicket = async () => {
    setLaoding(true)
    
    try {
      const docRef = await addDoc(collection(db, "supportTicket"), {
        // entityName: 'code2 support ticket',
        entityUserId: user?.uid,
        issueDescription: issue,
        status : 'open',
        active : true,
        isApproved : false,
        supportProfile : 'business'
      });
      toast('Support message sent')
      setIssue('')
    } catch (e) {
      toast('Try again later')
      console.error("Error adding document: ", e);
    }
    setLaoding(false)
    
  };
  
  return (
    <div>
      {loading && <Loader />}
      
      <div className="BusinessMobNavbar">
        <Navbar />
      </div>
      <div className="BusinessWebNavbar">
        <BusinessWebNavbar />
      </div>

      <div className="support">
        <div className="business__title">
          <p className="support__title">Support</p>
          <p className="problem">Are you facing any problem?</p>
          <p className="query">
            Send us your query. Our team will contact you as soon as possible to
            resolve your problem.{" "}
          </p>
        </div>
        <div className="support__details">
          <p className="support__company">CODE2</p>
          <p className="support__contact">+3456 567 89</p>
        </div>
        <div className="support__user">
          <div className="support__user__left">
            <h2>Etisalat</h2>
          </div>
          <div className="support__user__right">
            <p>{userProfileData?.name}</p>
            <p>{userProfileData?.mobileNumber}</p>
          </div>
        </div>
        <div className="support__inputBox">
          <textarea
            rows="2"
            placeholder="Write something.."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div className="send__request">
          <button className="support__post" onClick={handlePost}>
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
