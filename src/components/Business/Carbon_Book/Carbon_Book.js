import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Carbon_Book.css";
import Dropdown from "../Components/Dropdown";
import BusinessInput from "../Components/BusinessInput";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalenderOption from "../Components/CalenderOption";
import { useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import { collection, addDoc, getDocs, query, where,doc, setDoc, updateDoc } from "firebase/firestore"; 


const Carbon_Book = () => {
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)
  const [renewalCountry, setRenewalCountry] = useState('')
  const [renewalType, setRenewalType] = useState('')
  const [generatedRenewal, setGeneratedRenewal] = useState('') // input
  const [reductionByRenewal, setReductionByRenewal] = useState('') // reductio1

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // if other initatives 
  const [showOtherInitatives, setShowOtherInitatives] = useState(false)
  const [otherCountryOfReduction, setOtherCountryOfReduction] = useState('')
  const [otherkwhReduction, setotherkwhReduction] = useState('') // input
  const [reductionByOtherMeasure, setReductionByOtherMeasure] = useState('') // reductio 2
  
  const [totalco2Reduction, setTotalco2Reduction] = useState('') // final reduction
  const [totalco2Externally, setco2Externally] = useState('')// user calculated reduction

  useEffect(()=>{
    loadInitalData()
  },[])

  const loadInitalData = async ()=>{
    setLaoding(true)
    try{
      const dataItem = 'carbonBook'
      const rewardBookCollection = collection(db, dataItem);
      const querySnapshot = await getDocs(query(rewardBookCollection, where('companyUserId', '==', user?.uid)));
      if (querySnapshot.size > 0){
        const firstDoc = querySnapshot.docs[0];
        const data = firstDoc?.data()
        setStartDate(data?.startDate)
        setEndDate(data?.endDate)
        setRenewalCountry(data?.renewalCountry)
        setRenewalType(data?.renewalType)
        setGeneratedRenewal(data?.generatedRenewal)
        setReductionByRenewal(data?.reductionByRenewal)
        setShowOtherInitatives(data?.showOtherInitatives)
        setOtherCountryOfReduction(data?.otherCountryOfReduction)
        setotherkwhReduction(data?.otherkwhReduction)
        setReductionByOtherMeasure(data?.reductionByOtherMeasure)
        setTotalco2Reduction(data?.totalco2Reduction)
        setco2Externally(data?.totalco2Externally)
        // setTotalco2Reduction(data?.totalco2Reduction)
        // setTotalCode2Generated(parseInt(data?.generatedRenewal || 0) + parseInt(data?.otherkwhReduction || 0))
        // console.log(data?.startDate)
      }
    }catch(e){console.log(e)}
    setLaoding(false)
  }
  
  const handleSaveBtn = ()=>{
    if(!renewalCountry || !renewalType || !generatedRenewal || !reductionByRenewal || showOtherInitatives && !otherkwhReduction ||
      showOtherInitatives && !otherCountryOfReduction || !startDate || !endDate){
      toast('please enter all values first')
      return
    }
    !loading && updateOrCreateCarbonBook(user?.uid, {
      companyName: 'code2 new deal',
      companyUserId: user?.uid,
      startDate : startDate,
      endDate : endDate,
      active : true,
      isApproved : false,
      renewalCountry : renewalCountry,
      renewalType : renewalType,
      generatedRenewal : generatedRenewal,
      reductionByRenewal : reductionByRenewal,
      showOtherInitatives : showOtherInitatives,
      otherCountryOfReduction : otherCountryOfReduction,
      otherkwhReduction : otherkwhReduction,
      reductionByOtherMeasure : reductionByOtherMeasure,
      totalco2Reduction : totalco2Reduction,
      totalco2Externally : totalco2Externally,   
  })
    // console.log('save button click')
    // handleSave()
  }
  const updateOrCreateCarbonBook = async (companyUserId, newData) => {
    setLaoding(true)
    const dataItem = 'carbonBook'
    const rewardBookCollection = collection(db, dataItem);
    const querySnapshot = await getDocs(query(rewardBookCollection, where('companyUserId', '==', companyUserId)));
    
    try {
      if (querySnapshot.size > 0) { 
        const firstDoc = querySnapshot.docs[0];
        const docRef = doc(db, dataItem, firstDoc.id);
  
        await updateDoc(docRef, newData);
        console.log(`Document with companyUserId ${companyUserId} updated successfully.`);

      } else {
          await setDoc(doc(rewardBookCollection), { ...newData, companyUserId });
          console.log(`New document with companyUserId ${companyUserId} added successfully.`);
      }
      // setRenewalCountry('')
      // setRenewalType('')
      // setGeneratedRenewal('')
      // setReductionByRenewal('')
      // setStartDate('')
      // setEndDate('')
      // setShowOtherInitatives(false)
      // setOtherCountryOfReduction('')
      // setotherkwhReduction('')
      // setReductionByOtherMeasure('')
      // setTotalco2Reduction('')
      // setco2Externally('')
      
      toast('Updated sucessfully')
      setLaoding(false)
    } catch (e) {
      console.error('Error updating document: ', e);
      toast('Try again later')
    }
  };

  useEffect(()=>{
    if(reductionByOtherMeasure && reductionByRenewal){
      setTotalco2Reduction(reductionByOtherMeasure+reductionByRenewal)
    }else if(reductionByOtherMeasure) {
      setTotalco2Reduction(reductionByOtherMeasure)
    }else if(reductionByRenewal){
      setTotalco2Reduction(reductionByRenewal)
    }else{
      setTotalco2Reduction('')
    }
  },[reductionByRenewal, reductionByOtherMeasure])

  useEffect(()=>{
    // country based reduction 
    const currentFactor = 0.4
    setReductionByRenewal(currentFactor*generatedRenewal)
  },[generatedRenewal])

  useEffect(()=>{ // other initative measure calculation
    const currentFactor = 0.4
    setReductionByOtherMeasure(currentFactor*otherkwhReduction)
  },[otherkwhReduction])

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <div className="carbon__book">
        <div className="business__title">
          <p>Carbon Book</p>
        </div>
        <div className="carbon__input">
          <p>Country of Renewal generation</p>
          <Dropdown options={['UAE']} setValue={setRenewalCountry} currValue={renewalCountry} />

          <p>Type of Renewal</p>
          <Dropdown options={['Solar']} setValue={setRenewalType} currValue={renewalType} />

          <p>Generated Renewal</p>
          <BusinessInput setValue={setGeneratedRenewal} currValue={generatedRenewal} type={'number'} />

          <p>CO2 Reduction </p> 
          <BusinessInput isDisabled currValue={reductionByRenewal} />

          {/* other initiatives */}
          {!showOtherInitatives && <div className="flexrow" >
            <div onClick={()=>setShowOtherInitatives(true)} className="addButton">
              <AiOutlinePlusCircle className="plusButton" />
              <p>Add Other Initiatives</p>
            </div>
          </div>}

          {showOtherInitatives && <div className="carbon__input" >
            <p>Kwh Reduction by other initiatives </p>
            <BusinessInput setValue={setotherkwhReduction} currValue={otherkwhReduction} type={'number'} />

            <p>Country of Reduction </p>
            <BusinessInput setValue={setOtherCountryOfReduction} currValue={otherCountryOfReduction} type={'text'} />

            <p>CO2 Reduction by other measures </p>
            <BusinessInput currValue={reductionByOtherMeasure} />
          </div>}

          <div className="calender__selection">
            <div className="calender__from">
              <p>From</p>
              {!loading && <CalenderOption currValue={startDate} setValue={setStartDate} />}
            </div>
            <div className="calender__to">
              <p>To</p>
              {!loading && <CalenderOption currValue={endDate} setValue={setEndDate} />}
            </div>
          </div>
          <p>Total CO2 Reduction</p>
          <BusinessInput isDisabled currValue={totalco2Reduction} />
          <p>Total CO2 Reduction(Externally Calculated) </p>
          <BusinessInput setValue={setco2Externally} currValue={totalco2Externally} type={'number'} />
        </div>
        <div className="carbon__save">
          <button onClick={handleSaveBtn} className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Carbon_Book;
