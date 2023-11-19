import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "./CarbonCredit.css";
import CalenderOption from "../Components/CalenderOption";
import "../Carbon_Book/Carbon_Book.css";
import Dropdown from "../Components/Dropdown";
import StatusDropdown from "../Components/StatusDropdown";
import CarbonCreditStatus from "../Components/CarbonCreditStatus";
import BusinessInput from "../Components/BusinessInput";
import { useSelector } from "react-redux";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";

const CarbonCredit = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [carbonReduction, setCarbonReduction] = useState("");
  const [standard, setStandard] = useState("");
  const [standardStatus, setStandardStatus] = useState("");
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);

  const [validation, setValidation] = useState("");
  const [validationStatus, setValidationStatus] = useState("");

  const [carbonCreditRegister, setCarbonCreditRegister] = useState("");
  const [carbonCreditRegisterStatus, setCarbonCreditRegisterStatus] =
    useState("");

  const [carbonCreditTrades, setCarbonCreditTrades] = useState("");
  const [carbonCreditTradesStatus, setCarbonCreditTradesStatus] = useState("");

  useEffect(() => {
    loadInitalData();
  }, [user]);

  const loadInitalData = async () => {
    setLaoding(true);
    try {
      const dataItem = "carbonCredit";
      const rewardBookCollection = collection(db, dataItem);
      const querySnapshot = await getDocs(
        query(rewardBookCollection, where("companyUserId", "==", user?.uid))
      );
      if (querySnapshot.size > 0) {
        const firstDoc = querySnapshot.docs[0];
        const data = firstDoc?.data();
        setStartDate(data?.startDate);
        setEndDate(data?.endDate);
        setCarbonReduction(data?.carbonReduction);
        setStandard(data?.standard);
        setStandardStatus(data?.standardStatus);
        setValidation(data?.validation);
        setValidationStatus(data?.validationStatus);
        setCarbonCreditRegister(data?.carbonCreditRegister);
        setCarbonCreditRegisterStatus(data?.carbonCreditRegisterStatus);
        setCarbonCreditTrades(data?.carbonCreditTrades);
        setCarbonCreditTradesStatus(data?.carbonCreditTradesStatus);
      }
    } catch (e) {
      console.log(e);
    }
    setLaoding(false);
  };
  const handleSaveBtn = () => {
    if (
      !startDate ||
      !endDate ||
      !carbonReduction ||
      !standard ||
      !standardStatus ||
      !validation ||
      !validationStatus ||
      !carbonCreditRegister ||
      !carbonCreditRegisterStatus ||
      !carbonCreditTrades ||
      !carbonCreditTradesStatus
    ) {
      toast("please enter all values first");
      return;
    }
    // console.log('save button click')
    !loading &&
      handleSave(user?.uid, {
        companyName: "code2 new deal",
        companyUserId: user?.uid,
        startDate: startDate,
        endDate: endDate,
        carbonReduction: carbonReduction,
        standard: standard,
        standardStatus: standardStatus,
        validation: validation,
        validationStatus: validationStatus,
        carbonCreditRegister: carbonCreditRegister,
        carbonCreditRegisterStatus: carbonCreditRegisterStatus,
        carbonCreditTrades: carbonCreditTrades,
        carbonCreditTradesStatus: carbonCreditTradesStatus,

        active: true,
        isApproved: false,
      });
  };
  const handleSave = async (companyUserId = "", newData = {}) => {
    setLaoding(true);
    const dataItem = "carbonCredit";
    const rewardBookCollection = collection(db, dataItem);
    const querySnapshot = await getDocs(
      query(rewardBookCollection, where("companyUserId", "==", companyUserId))
    );

    try {
      if (querySnapshot.size > 0) {
        const firstDoc = querySnapshot.docs[0];
        const docRef = doc(db, dataItem, firstDoc.id);

        await updateDoc(docRef, newData);
        console.log(
          `Document with companyUserId ${companyUserId} updated successfully.`
        );
      } else {
        await setDoc(doc(rewardBookCollection), { ...newData, companyUserId });
        console.log(
          `New document with companyUserId ${companyUserId} added successfully.`
        );
      }

      // setStartDate('')
      // setEndDate('')
      // setCarbonReduction('')
      // setStandard('')
      // setStandardStatus('')
      // setValidation('')
      // setValidationStatus('')
      // setCarbonCreditRegister('')
      // setCarbonCreditRegisterStatus('')
      // setCarbonCreditTrades('')
      // setCarbonCreditTradesStatus('')
      toast("Updated sucessfully");
      setLaoding(false);
    } catch (e) {
      console.error("Error updating document: ", e);
      toast("Try again later");
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="BusinessMobNavbar">
        <Navbar />
      </div>
      <div className="BusinessWebNavbar">
        <BusinessWebNavbar />
      </div>
      <div className="credit__book">
        <div className="business__title">
          <p>Carbon Credit Book</p>
        </div>
        <div className="calender__selection">
          <div className="calender__from">
            <p>From</p>
            {!loading && (
              <CalenderOption currValue={startDate} setValue={setStartDate} />
            )}
          </div>
          <div className="calender__to">
            <p>To</p>
            {!loading && (
              <CalenderOption currValue={endDate} setValue={setEndDate} />
            )}
          </div>
        </div>
        <p>Carbon emission reduction</p>
        <BusinessInput
          option={true}
          setValue={setCarbonReduction}
          currValue={carbonReduction}
          type={"number"}
        />

        <p>Select Standards</p>
        <div className="status__dropdown">
          <CarbonCreditStatus
            options={["Gold Standard"]}
            setValue={setStandard}
            currValue={standard}
          />
          <StatusDropdown
            options={["To be done"]}
            setValue={setStandardStatus}
            currValue={standardStatus}
          />
        </div>

        <p>Select Validation</p>
        <div className="status__dropdown">
          <CarbonCreditStatus
            options={["Bureau Veritas"]}
            setValue={setValidation}
            currValue={validation}
          />
          <StatusDropdown
            options={["To be done"]}
            setValue={setValidationStatus}
            currValue={validationStatus}
          />
        </div>
        <p>Carbon Credit Register</p>
        <div className="status__dropdown">
          <CarbonCreditStatus
            options={["APX"]}
            setValue={setCarbonCreditRegister}
            currValue={carbonCreditRegister}
          />
          <StatusDropdown
            options={["To be done"]}
            setValue={setCarbonCreditRegisterStatus}
            currValue={carbonCreditRegisterStatus}
          />
        </div>
        <p>Carbon Credits Trade</p>
        <div className="status__dropdown">
          <CarbonCreditStatus
            options={["ACX"]}
            setValue={setCarbonCreditTrades}
            currValue={carbonCreditTrades}
          />
          <StatusDropdown
            options={["To be done"]}
            setValue={setCarbonCreditTradesStatus}
            currValue={carbonCreditTradesStatus}
          />
        </div>
        <div className="carbon__save">
          <button onClick={handleSaveBtn} className="carbon__save__button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredit;
