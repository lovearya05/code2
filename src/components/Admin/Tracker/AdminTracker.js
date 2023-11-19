import React, { useEffect, useState } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdminTracker.css";
import TrackerBox from "../../Business/Tracker/TrackerBox";
import ListComponent from "./Components/BusinessList";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import { db } from '../../../firebaseConfig';
import {getAllData} from '../../utilityFunction'
import { useSelector } from "react-redux";
import Loader from "../../login/EssentialComponents/Loader";



const AdminTracker = () => {
  // const [change, setChange] = useState(true);
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)
  const [businessProfiles, setBusinessProfiles] = useState([])
  const [consumerProfiles, setConsumerProfiles] = useState([])
  const [selectedUserType, setSelectedUserType ] = useState('business')

  const changeFunction = (value) => {
    setSelectedUserType(value);
  };
  useEffect(()=>{
    loadBusinessProfiles()
    loadConsumerProfiles()
  },[user])

  const loadBusinessProfiles = async ()=>{
    const data = await getAllData(db, 'businessProfile', '', '', ()=>setLaoding(true), ()=>setLaoding(false), true )
    if(data) setBusinessProfiles(data)
    // console.log('profiles', data)
  }
  // 
  const loadConsumerProfiles = async ()=>{
    const data = await getAllData(db, 'consumerProfile', '', '', ()=>setLaoding(true), ()=>setLaoding(false), true )
    if(data) setConsumerProfiles(data)
    console.log('consumer data', data)
  }

  
  return (
    <div>
      {loading && <Loader />}
      <div className="admin__mob__navbar">
        <Navbar />
      </div>
      <div className="admin__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="admin">
        <div className="admin__button">
          <button
            className={`${selectedUserType==='business' ? " admin__button__clicked" : null} `}
            onClick={() => changeFunction('business')}
          >
            Business(20)
          </button>
          <button
            className={`${selectedUserType==='individual' ? " admin__button__clicked" : null} `}
            onClick={() => changeFunction('individual')}
          >
            Individual(10)
          </button>
        </div>
        <div>
          {selectedUserType==='business' ? (
            <div>
              {businessProfiles.map((item, i)=>{
                return <ListComponent
                key={i}
                companyName={item?.company} 
                pocName={item?.POCName} 
                contactNumber={item?.POCPhone}  
                isActive={!item?.isBlockedUser} 
                code2Earned={item?.code2Earned || 0}
                text2={'CODE2 Distributed'} 
                code2Distributed={item?.code2Distributed || 0}
                code2Balance={item?.code2Balance || 0}
                />
              })}
            </div>
          ) : (
            <div>
              {consumerProfiles.map((item, i)=>{
                return <ListComponent
                key={i}
                companyName={item?.userName} 
                pocName={item?.contactNumber} 
                contactNumber={item?.typicallyBuy}  
                isActive={!item?.isBlockedUser} 
                code2Earned={item?.code2Earned || 0}
                text2={'CODE2 Redeemed'} 
                code2Distributed={item?.code2Redeemed || 0}
                code2Balance={item?.code2Balance || 0}
                />
              })}
              {/* <ListComponent companyName='' pocName='' contactNumber=''  isActive={false} code2Earned='' text2={'CODE2 Redeemed'} code2Distributed='' code2Balance='' /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTracker;
