import React, { useState } from "react";
import "./Factor.css";
import Navbar from "../../AdminNavbar/Navbar";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import toast from "react-simple-toasts";
import { updateOrCreateData, getData } from '../../utilityFunction';
import { db } from '../../../firebaseConfig';
import { getCurrentDateTimeString } from "../../utilFunctions";
import Loader from '../../login/EssentialComponents/Loader';


const Factor = () => {
  const [country, setCountary] = useState('')
  const [fuelType, setFuelType] = useState('')
  const [multiplyingFactor, setMultiplyingFactor] = useState('')
  const [loading, setLaoding] = useState(false);


  const handleSaveButton = ()=>{
    if(!country || !fuelType || !multiplyingFactor){
      toast('please fill all the inputs first')
      return
    }
    handleCreate({
      'country' : country,
      "fuelType" : fuelType,
      "multiplyingFactor" : multiplyingFactor,
      "active" : true,
      "cDate" : getCurrentDateTimeString(),
    })
  }
  const handleCreate = async(newData={})=>{
    try{
      const data = await updateOrCreateData(db, 'multiplyFactors', 'country', country, newData,()=>setLaoding(true), ()=>setLaoding(false))
      console.log(data)
    }catch(e){console.log(e)}
  }

  return (
    <div>
      {loading && <Loader />}
      <div className="factor__mob__navbar">
        <Navbar />
      </div>
      <div className="factor__web__navbar">
        <AdminWebNavbar />
      </div>
      <div className="factor">
        <div className="factor__title">
          <h2>Factor</h2>
        </div>
        <div className="factor__form">
          <p>Country</p>
          <Dropdown setValue={setCountary} currValue={country} options={["🇦🇪UAE", "🇬🇧London", "🇦🇹Vienna"]} />
          <p>Fuel type</p>
          <Dropdown setValue={setFuelType} currValue={fuelType} options={["🟡Solar", "💧Hydro", "Tidal"]} />
          <p>Multiplying factor</p>
          <Business__Input setValue={setMultiplyingFactor} currValue={multiplyingFactor} />
          <div onClick={handleSaveButton} className="factor__save">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factor;
