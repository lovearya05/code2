import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Carbon_Book.css";
import Dropdown from "../Components/Dropdown";
import BusinessInput from "../Components/BusinessInput";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalenderOption from "../Components/CalenderOption";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";

const Carbon_Book = () => {
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)
  const [renewalCountry, setRenewalCountry] = useState('')
  const [renewalType, setRenewalType] = useState('')
  const [generatedRenewal, setGeneratedRenewal] = useState('')
  const [reductionByRenewal, setReductionByRenewal] = useState('') // reductio1

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [totalco2Reduction, setTotalco2Reduction] = useState('') // final reduction1
  
  // const [totalReductionIntExtr, setTotalReductionIntExtr] = useState('')
  
  // if other initatives 
  const [showOtherInitatives, setShowOtherInitatives] = useState(false)
  const [kwhReductionByReduction, setkwhReductionByReduction] = useState('')
  const [countryOfReduction, setCountryOfReduction] = useState('')
  const [co2ReductionByOtherMeasure, setco2ReductionByOtherMeasure] = useState('') // reductio 2

  const [totalco2Externally, setco2Externally] = useState('')// user calculated reduction
  
  const handleSaveBtn = ()=>{
    if(!renewalCountry || !renewalType || !generatedRenewal || !reductionByRenewal || showOtherInitatives && !kwhReductionByReduction ||
      showOtherInitatives && !countryOfReduction || !startDate || !endDate){
      toast('please enter all values first')
      return
    }
    // console.log('save button click')
    // !loading && handleSave()
  }
  useEffect(()=>{
    if(co2ReductionByOtherMeasure && reductionByRenewal){
      setTotalco2Reduction(co2ReductionByOtherMeasure+reductionByRenewal)
    }else if(co2ReductionByOtherMeasure) {
      setTotalco2Reduction(co2ReductionByOtherMeasure)
    }else if(reductionByRenewal){
      setTotalco2Reduction(reductionByRenewal)
    }else{
      setTotalco2Reduction('')
    }
  },[reductionByRenewal, co2ReductionByOtherMeasure])

  useEffect(()=>{
    // country based reduction 
    const currentFactor = 0.4
    setReductionByRenewal(currentFactor*generatedRenewal)
  },[generatedRenewal])
  useEffect(()=>{ // other initative measure calculation
    const currentFactor = 0.4
    setco2ReductionByOtherMeasure(currentFactor*kwhReductionByReduction)
  },[kwhReductionByReduction])

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
            <BusinessInput setValue={setkwhReductionByReduction} currValue={kwhReductionByReduction} type={'number'} />

            <p>Country of Reduction </p>
            <BusinessInput setValue={setCountryOfReduction} currValue={countryOfReduction} type={'text'} />

            <p>CO2 Reduction by other measures </p>
            <BusinessInput currValue={co2ReductionByOtherMeasure} />
          </div>}

          <div className="calender__selection">
            <div className="calender__from">
              <p>From</p>
              <CalenderOption currValue={startDate} setValue={setStartDate} />
            </div>
            <div className="calender__to">
              <p>To</p>
              <CalenderOption currValue={endDate} setValue={setEndDate} />
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
