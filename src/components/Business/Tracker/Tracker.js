import React, { useEffect, useState } from "react";
import "./Tracker.css";
import Navbar from "../../Navbar/Navbar";
import TrackerBox from "./TrackerBox";
import { useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
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
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";

const Tracker = () => {
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);
  const [totalco2Reduction, setTotalco2Reduction] = useState("");
  const [totalCode2Generated, setTotalCode2Generated] = useState("");

  useEffect(() => {
    loadInitalData();
  }, []);

  const loadInitalData = async () => {
    setLaoding(true);
    try {
      const dataItem = "carbonBook";
      const rewardBookCollection = collection(db, dataItem);
      const querySnapshot = await getDocs(
        query(rewardBookCollection, where("companyUserId", "==", user?.uid))
      );
      if (querySnapshot.size > 0) {
        const firstDoc = querySnapshot.docs[0];
        const data = firstDoc?.data();
        setTotalco2Reduction(data?.totalco2Reduction);
        setTotalCode2Generated(
          parseInt(data?.generatedRenewal || 0) +
            parseInt(data?.otherkwhReduction || 0)
        );
      }
    } catch (e) {
      console.log(e);
    }
    setLaoding(false);
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
      <div className="tracker">
        <div className="business__title">
          <p className="bt__tracker">Tracker</p>
          <p className="bt__dashboard">Dashboard</p>
        </div>
        <div className="business__boxes">
          <TrackerBox
            // value={totalco2Reduction}
            value="25000"
            logo={true}
            logoText={true}
            show={false}
            colorBox="#f0ad00"
            value2="CO2 Reduction"
          />
          <TrackerBox
            // value={totalCode2Generated}
            value="23,3333"
            colorBox="#FFF"
            code2="CODE"
            show={true}
            value2="Generated"
          />
          <TrackerBox
            value="0,000"
            colorBox="#FFF"
            code2="CODE"
            show={true}
            value2="Distributed"
          />
          <TrackerBox
            value="00,000"
            colorBox="#FFF"
            code2="CODE"
            show={true}
            value2="Redeemed"
          />
          <TrackerBox
            value="00,000"
            colorBox="#FFF"
            code2="CODE"
            show={true}
            value2="Redeemed value"
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
