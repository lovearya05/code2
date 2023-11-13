import React, { useState } from "react";
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
  const [reductionByRenewal, setReductionByRenewal] = useState('')
  const [kwhReductionByReduction, setkwhReductionByReduction] = useState('')
  const [countryOfReduction, setCountryOfReduction] = useState('')
  const [co2ReductionByOtherMeasure, setco2ReductionByOtherMeasure] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [totalco2Reduction, setTotalco2Reduction] = useState('')
  const [totalco2Externally, setco2Externally] = useState('')

  const handleSaveBtn = ()=>{
    if(!renewalCountry || !renewalType || !generatedRenewal || !reductionByRenewal || !kwhReductionByReduction || !countryOfReduction
       || !co2ReductionByOtherMeasure || !startDate || !endDate || !totalco2Reduction || !totalco2Externally){
      toast('please enter all values first')
      return
    }
    // console.log('save button click')
    // !loading && handleSave()
  }

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

          <p>CO2 Reduction by Renewals </p>
          <BusinessInput setValue={setReductionByRenewal} currValue={reductionByRenewal} type={'number'} />
          {/*  */}

          <p>Kwh Reduction by other initiatives </p>
          <BusinessInput setValue={setkwhReductionByReduction} currValue={kwhReductionByReduction} type={'number'} />

          <p>Country of Reduction </p>
          <BusinessInput setValue={setCountryOfReduction} currValue={countryOfReduction} type={'text'} />

          <p>CO2 Reduction by other measures </p>
          <BusinessInput setValue={setco2ReductionByOtherMeasure} currValue={co2ReductionByOtherMeasure} type={'number'} />

          <div className="addButton">
            <AiOutlinePlusCircle className="plusButton" />
            <p>Add Other Initiatives</p>
          </div>

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
          <BusinessInput setValue={setTotalco2Reduction} currValue={totalco2Reduction} type={'number'} />
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
