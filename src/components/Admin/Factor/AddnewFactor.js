import React, { useState } from "react";
import "./Factor.css";
import Navbar from "../../AdminNavbar/Navbar";
import Dropdown from "../../Business/Components/Dropdown";
import Business__Input from "../../Business/Components/BusinessInput";
import AdminWebNavbar from "../../WebNavbar.js/AdminWebNavbar";
import toast from "react-simple-toasts";
import { updateOrCreateData, getData } from "../../utilityFunction";
import { db } from "../../../firebaseConfig";
import { getCurrentDateTimeString } from "../../utilFunctions";
import Loader from "../../login/EssentialComponents/Loader";
import FactorHeader from "./FactorHeader";
import FactorData from "./FactorData";

function AddnewFactor({setAddNewFactor, setLaoding, loadFactors}) {
    const [country, setCountary] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [multiplyingFactor, setMultiplyingFactor] = useState("");

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
            setAddNewFactor(false)
            loadFactors()
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="">
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
        </div>
    )
}

export default AddnewFactor