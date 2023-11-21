import React, { useEffect, useState } from "react";
import "./AdminSupport.css";
import SupportComponent from "./SupportComponent";
import Navbar from "../../AdminNavbar/Navbar";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import { db } from '../../../firebaseConfig';
import {getAllData} from '../../utilityFunction'
import { useSelector } from "react-redux";
import Loader from "../../login/EssentialComponents/Loader";

const AdminSupport = () => {
  const [supportData, setSupportData] = useState([])
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)

  useEffect(()=>{
    loadSupportTickets()
  },[user])

  const loadSupportTickets = async ()=>{
    const data = await getAllData(db, 'supportTicket', '', '', ()=>setLaoding(true), ()=>setLaoding(false), true )
    if(data) setSupportData(data)
    console.log('setSupportData data', data)
  }
  // 
  return (
    <div>
      {loading && <Loader />}
      <div className="sp__mob__navabr">
        <Navbar />
      </div>
      <div className="sp__web__navabr">
        <AdminWebNavbar />
      </div>
      <div className="adminSupport">
        <div className="admin__support">
          <h2>Support</h2>
        </div>
        <div>
          {supportData.map((item, i)=>{
            return <SupportComponent 
            supportProfile={item?.supportProfile} 
            userId={item?.entityUserId} key={i} 
            ticketID='' isTicketOpen={item?.status=='open'} 
            supportDescription={item?.issueDescription} />
          })}
          {/* <SupportComponent open={true} /> */}
          {/* <SupportComponent open={false} /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
