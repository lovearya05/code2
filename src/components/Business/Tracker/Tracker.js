import React, {useEffect, useState} from "react";
import "./Tracker.css";
import Navbar from "../../Navbar/Navbar";
import TrackerBox from "./TrackerBox";
import { useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import { collection, addDoc, getDocs, query, where,doc, setDoc, updateDoc } from "firebase/firestore"; 


const Tracker = () => {
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)
  const [totalco2Reduction, setTotalco2Reduction] = useState('')
  const [totalCode2Generated, setTotalCode2Generated] = useState('')

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
        setTotalco2Reduction(data?.totalco2Reduction)
        setTotalCode2Generated(parseInt(data?.generatedRenewal || 0) + parseInt(data?.otherkwhReduction || 0))
      }
    }catch(e){console.log(e)}
    setLaoding(false)
  }

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <div className="tracker">
        <div className="business__title">
          <p>Tracker</p>
        </div>
        <div className="business__boxes">
          <TrackerBox
            value={totalco2Reduction}
            colorBox="#f0ad00"
            value2="CO2 Reduction"
          />
          <TrackerBox
            value={totalCode2Generated}
            colorBox="#FFF"
            value2="CODE2 Generated"
          />
          <TrackerBox
            value="0,000"
            colorBox="#FFF"
            value2="CODE2 Distributed"
          />
          <TrackerBox 
             value="00,000" 
            colorBox="#FFF"
            value2="CODE2 Redeemed"
          />
          <TrackerBox
            value="00,000"
            colorBox="#FFF"
            value2="Code2 Redeemed Value"
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
