import React, { useState, useEffect } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdditionalFee.css";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import { useNavigate } from "react-router-dom";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import { db } from '../../../firebaseConfig';
import {getAllData, createData} from '../../utilityFunction'
import {getCurrentDateTimeString} from '../../utilFunctions'
import { useSelector } from "react-redux";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";

const AdditionalFee = () => {
  const [loading, setLaoding] = useState(false)
  const { user } = useSelector(state => state?.appData)
  const [allCountryData, setAllCountryData] = useState([])

  const [country,  setCountry] = useState('')

  const [paymentTracking, setPaymentTracking] = useState({
    subscriptionFee: '',
    collectedSubFee: '',
    referalPercent: '',
    referalFeeValue: '',
    collectedReffelFee: '',
    totalFeeCalculated: '',
})

const handleSaveBtn = async () => {
  if (
      !country ||
      !paymentTracking.subscriptionFee ||
      !paymentTracking.collectedSubFee ||
      !paymentTracking.referalPercent ||
      !paymentTracking.referalFeeValue ||
      !paymentTracking.collectedReffelFee ||
      !paymentTracking.totalFeeCalculated
  ) {
      toast('please fill all the fields first')
      return
  }
  await createData(db, 'paymentTracking',
   { ...paymentTracking,
     uid: user?.uid, 
     active : true,
     cDate : getCurrentDateTimeString()
  },
  () => setLaoding(true), () => setLaoding(false))
}

  const navigate = useNavigate();
  const goBackFunction = () => {
    navigate(-1);
  };

  useEffect(()=>{
    loadCountry()
  },[user])

  const loadCountry = async ()=>{
    const data = await getAllData(db, 'multiplyFactors', '', '', ()=>setLaoding(true), ()=>setLaoding(false), true )
    if(data) setAllCountryData(data)
    // console.log('setAllCountryData data', data)
  }


  return (
    <div>
      {loading && <Loader />}

      <div className="pt__mob__navbar">
        <Navbar />
      </div>
      <div className="pt__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="additional__fee">
        <div className="additionalFee">
          <h2>Additional fee</h2>
          <button onClick={goBackFunction}>Back</button>
        </div>
        <div className="additionalFee__Form">
          <p>Registered Company</p>
          <Dropdown options={allCountryData.map((item,i)=> item?.country)} setValue={setCountry} currValue={country}/>

          <p>Subscription Fee</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, subscriptionFee: input }
          }) } currValue={paymentTracking?.subscriptionFee} type="number" />

          <p>Collected Sub Fee</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, collectedSubFee: input }
          }) } currValue={paymentTracking?.collectedSubFee} type="number" />
          
          <p>Referral %age</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, referalPercent: input }
          }) } currValue={paymentTracking?.referalPercent} type="number" />

          <p>Referral Fee Value</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, referalFeeValue: input }
          }) } currValue={paymentTracking?.referalFeeValue} type="number" />

          <p>Collected Ref. Fee</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, collectedReffelFee: input }
          }) } currValue={paymentTracking?.collectedReffelFee} type="number" />

          <p>Total Calculated</p>
          <Business__Input setValue={(input)=>setPaymentTracking(p=>{
            return {...p, totalFeeCalculated: input }
          }) } currValue={paymentTracking?.totalFeeCalculated} type="number" />

          <div className="additional__save"  >
            <button onClick={handleSaveBtn}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFee;
