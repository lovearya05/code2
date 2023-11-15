import React, {useEffect, useState} from "react";
import "./TrackerConsumer.css";
// import Navbar from "../../Navbar/Navbar";
import TrackerBox from "./TrackerBoxConsumer";
import { useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import { collection, addDoc, getDocs, query, where,doc, setDoc, updateDoc } from "firebase/firestore"; 
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import { CircularBtn, RecentTransectionCard, EarnedCode2Card } from "../utilityComponents";


const TrackerConsumer = () => {
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)
  const [totalco2Reduction, setTotalco2Reduction] = useState('')
  const [totalCode2Generated, setTotalCode2Generated] = useState('')
  const [listToShow, setListToShow] = useState('transection')

  useEffect(()=>{
    // loadInitalData()
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
      <NavbarConsumer />
      <div className="tracker">
        <div className="business__title">
          <p>Tracker</p>
        </div>
        <div className="business__boxes">
          <TrackerBox
            value={40.8}
            colorBox="#f0ad00"
            value2="CO2 Earned"
          />
          <TrackerBox
            value={10}
            colorBox="#FFF"
            value2="CODE2 Redeemed"
          />
          <TrackerBox
            value="31"
            colorBox="#FFF"
            value2="CODE2 Balance"
          />
          <TrackerBox 
             value="40.8" 
            colorBox="#FFF"
            value2="CO2 Avoidance"
          />

        </div>
        <div className="PointsButtonsDiv" >
          <CircularBtn onClickBtn={()=>setListToShow('transection')} 
          isActive={listToShow === 'transection' }
          text="Recent Transactions" />
          <div style={{width:8}} ></div>
          <CircularBtn onClickBtn={()=>setListToShow('code2Earned')} 
          isActive={listToShow === 'code2Earned' } text="Earned Code 2" />
        </div>
      </div>

      {listToShow === 'transection' && <div>
        <RecentTransectionCard showTopLine={false}/>
        <RecentTransectionCard/>
        <RecentTransectionCard/>
      </div>}

      {listToShow === 'code2Earned' && <div>
        <EarnedCode2Card />
        <EarnedCode2Card />
        <EarnedCode2Card />
      </div>}
    </div>
  );
};

export default TrackerConsumer;
