import React, { useState, useEffect } from "react";
import "./Factor.css";
import Navbar from "../../AdminNavbar/Navbar";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import toast from "react-simple-toasts";
import { updateOrCreateData, getData, getAllData } from "../../utilityFunction";
import { db } from "../../../firebaseConfig";
import { getCurrentDateTimeString } from "../../utilFunctions";
import Loader from "../../login/EssentialComponents/Loader";
import FactorHeader from "./FactorHeader";
import FactorData from "./FactorData";
import AddnewFactor from "./AddnewFactor";
import { useSelector } from "react-redux";

const Factor = () => {
  const [country, setCountary] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [multiplyingFactor, setMultiplyingFactor] = useState("");
  const [loading, setLaoding] = useState(false);
  const [showAddNewFactor, setAddNewFactor] = useState(false)
  const [factorsData, setFactorsData] = useState([])
  const { user } = useSelector((state) => state?.appData);


  const handleSaveButton = () => {
    if (!country || !fuelType || !multiplyingFactor) {
      toast("please fill all the inputs first");
      return;
    }
    handleCreate({
      country: country,
      fuelType: fuelType,
      multiplyingFactor: multiplyingFactor,
      active: true,
      cDate: getCurrentDateTimeString(),
    });
  };
  const handleCreate = async (newData = {}) => {
    try {
      const data = await updateOrCreateData(
        db,
        "multiplyFactors",
        "country",
        country,
        newData,
        () => setLaoding(true),
        () => setLaoding(false)
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFactors();
  }, [user]);

  const loadFactors = async () => {
    const data = await getAllData(
      db,
      "multiplyFactors",
      "",
      "",
      () => setLaoding(true),
      () => setLaoding(false),
      true
    );
    if (data) setFactorsData(data);
    // console.log('profiles', data)
  };

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

      {showAddNewFactor && <AddnewFactor setAddNewFactor={setAddNewFactor} setLaoding={setLaoding} loadFactors={loadFactors} />}

        {!showAddNewFactor && <div className="factor__mob">
          <div className="factor__title">
            <h2>Factor</h2>
          </div>
          <div className="factor__form">
            <p>Country</p>
            <Dropdown
              setValue={setCountary}
              currValue={country}
              options={["🇦🇪UAE", "🇬🇧London", "🇦🇹Vienna"]}
            />
            <p>Fuel type</p>
            <Dropdown
              setValue={setFuelType}
              currValue={fuelType}
              options={["🟡Solar", "💧Hydro", "Tidal"]}
            />
            <p>Multiplying factor</p>
            <Business__Input
              setValue={setMultiplyingFactor}
              currValue={multiplyingFactor}
            />
            <div onClick={handleSaveButton} className="factor__save">
              <button>Save</button>
            </div>
          </div>
        </div>}

        {!showAddNewFactor && <div className="factor__web">
          <div className="fw__btn">
            <button onClick={()=>setAddNewFactor(true)} >Add New Factor</button>
          </div>
          <FactorHeader />

          {factorsData && factorsData.map((item, i)=>{
            return <FactorData
              key={i}
              header1="#"
              header2={item?.country}
              header3={item?.fuelType}
              header4={item?.multiplyingFactor}
              setAddNewFactor={setAddNewFactor}
            />

          })}
          {/* <FactorData
            header1="#4557"
            header2="London"
            header3="Tidal"
            header4="0.4"
          /> */}
        </div>}

      </div>
    </div>
  );
};

export default Factor;
