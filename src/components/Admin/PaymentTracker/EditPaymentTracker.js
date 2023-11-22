import React, { useState, useEffect } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import "./AdditionalFee.css";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import { useNavigate } from "react-router-dom";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import { db } from '../../../firebaseConfig';
import {getAllData, createData, updateDataWithDocId} from '../../utilityFunction'
import {getCurrentDateTimeString} from '../../utilFunctions'
import { useSelector } from "react-redux";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";

const EditPaymentTracker = ({setShowModal, selectedEditData={}, }) => {
  const [loading, setLaoding] = useState(false)
  const { user } = useSelector(state => state?.appData)

  const [company, setCompany] = useState('')
  const [businessProfiles, setBusinessProfiles] = useState([]);


  const [paymentTracking, setPaymentTracking] = useState({
    subscriptionFee: '',
    collectedSubFee: '',
    referalPercent: '',
    referalFeeValue: '',
    collectedReffelFee: '',
    totalFeeCalculated: '',
})
useEffect(()=>{
  setPaymentTracking({...selectedEditData})
  setCompany(selectedEditData?.company)
},[selectedEditData])

useEffect(() => {
  loadBusinessProfiles();
}, [user]);

const loadBusinessProfiles = async () => {
  const data = await getAllData(
    db,
    "businessProfile",
    "",
    "",
    () => setLaoding(true),
    () => setLaoding(false),
    true
  );
  if (data) setBusinessProfiles(data);
  // console.log('profiles', data)
};

const handleSaveBtn = async () => {
  if (
      !company ||
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
  try{
    await updateDataWithDocId(db, 'paymentTracking', selectedEditData?.id, 
    {...paymentTracking,
      company : company
    }, ()=>setLaoding(true), ()=>setLaoding(false))
    setShowModal(false)
  }catch(e){console.log(e)}
}

  const navigate = useNavigate();
  const goBackFunction = () => {
    navigate(-1);
  };

  return (
    <div>
      {loading && <Loader />}

      <div className="additional__fee">
        <div className="additionalFee">
          <h2>Additional fee</h2>
          <button onClick={goBackFunction}>Back</button>
        </div>
        <div className="additionalFee__Form">
          <p>Registered Company</p>
          <Dropdown options={businessProfiles.map((item,i)=> item?.company)} setValue={setCompany} currValue={company}/>

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

export default EditPaymentTracker;
