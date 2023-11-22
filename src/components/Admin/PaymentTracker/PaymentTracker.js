import React, { useState, useEffect } from "react";
import "./PaymentTracker.css";
import Navbar from "../../AdminNavbar/Navbar";
import PaymentTrackerComponent from "./PaymentTrackerComponent";
import { FaPlus } from "react-icons/fa6";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import { useNavigate } from "react-router-dom";
import { getAllData, createData } from "../../utilityFunction";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import { useSelector } from "react-redux";
import TrackerHeader from "../Tracker/TrackerHeader";
import TrackerData from "../Tracker/TrackerData";
import TrackerDataPt from "./TrackerDataPt";
import EditPaymentTracker from "./EditPaymentTracker";

const PaymentTracker = () => {
  const [loading, setLaoding] = useState(false);
  const { user } = useSelector((state) => state?.appData);
  const [showEditModal, setShowModal] = useState(false)
  const [selectedEditData, setSelectedData] = useState({})

  const navigate = useNavigate();
  const [paymentTrackingData, setPaymentTrackingData] = useState();
  // console.log({paymentTrackingData})

  useEffect(() => {
    loadInitalData();
  }, [user, showEditModal]);

  const loadInitalData = async () => {
    const data = await getAllData(
      db,
      "paymentTracking",
      "",
      "",
      () => setLaoding(true),
      () => setLaoding(false),
      true
    );
    if (data) {
      setPaymentTrackingData(data);
    }
  };

  const gotoLocation = (urlLocation) => {
    navigate(`/code2/${urlLocation}`);
  };

 

  return (
    <div>
      {loading && <Loader />}

      <div className="pt__mob__navbar">
        <Navbar />
      </div>
      <div className="pt__web__navbar">
        <AdminWebNavbar />
      </div>

      {showEditModal ? 
      <EditPaymentTracker selectedEditData={selectedEditData} setShowModal={setShowModal} />
      :
      <div>
      <div className="payment__tracker__admin">
        <div className="payment__tracker__support">
          <h2>Payment Tracker</h2>
        </div>
        <div className="pt__web__data">
          <TrackerHeader
            header1="Company"
            header2="Subscription Fee"
            header3="Collected Sub Fee"
            header4="Referral Fee %"
            header5="Referal Fee value"
            header6="Collected Ref Fee"
            header7="Total Fee"
          />
          {paymentTrackingData && paymentTrackingData.map((item,i)=>{
            return(
              <TrackerDataPt key={i} 
              text1={item?.company}
              text2={item?.subscriptionFee}
              text3={item?.collectedSubFee}
              text4={item?.referalPercent}
              text5={item?.referalFeeValue}
              text6={item?.collectedReffelFee}
              text7={item?.totalFeeCalculated} 
              item={item}
              setShowModal={setShowModal}
              setSelectedData={setSelectedData}
              />
            )
          })}
        </div>
        <div className="pt__mob__data">
          <div>
            {paymentTrackingData &&
              paymentTrackingData.map((item, i) => {
                return (
                  <PaymentTrackerComponent
                    activate
                    countName={"Total Fee"}
                    countValue={item?.totalFeeCalculated}
                    countName1={"Subscription fee"}
                    countValue1={item?.subscriptionFee}
                    countValue2={item?.referalFeeValue}
                    countName2={"Referral fee"}

                  />
                );
              })}
          </div>
          <button className="plusPosition">
            <div
              className="AddPaymentTracker"
              onClick={() => gotoLocation("additionalfee")}
            >
              <FaPlus className="AdminPlus" />
            </div>
          </button>
        </div>
      </div>
      </div>
      
    }




    </div>
  );
};

export default PaymentTracker;
