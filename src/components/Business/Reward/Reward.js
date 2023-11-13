import React,{useState} from "react";
import Navbar from "../../Navbar/Navbar";
import "./Reward.css";
import "../Carbon_Book/Carbon_Book.css";
import CalenderOption from "../Components/CalenderOption";
import BusinessInput from "../Components/BusinessInput";
import Dropdown from "../Components/Dropdown";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";


const Reward = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [turnoverCovered, setTurnoverCovered] = useState('')
  const [redemptionValue, setRedemptionValue] = useState('')
  const [distributionRatio, setDistributionRation] = useState('')
  const [currency, setCurrency] = useState('')
  const [maxDiscount, setMaxDiscount] = useState('')
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)

  // console.log(startDate, endDate, turnoverCovered, redemptionValue, distributionRatio, currency, maxDiscount )
  const handleSaveBtn = ()=>{
    if(!startDate || !endDate || !turnoverCovered || !redemptionValue || !distributionRatio || !currency || !maxDiscount){
      toast('please enter all values first')
      return
    }
    console.log('save button click')
    !loading && handleSave()
  }

  const handleSave = async () => {
    setLaoding(true)
    
    try {
      const docRef = await addDoc(collection(db, "rewardBook"), {
        companyName: 'code2 new deal',
        companyUserId: user?.uid,
        startDate : startDate,
        endDate : endDate,
        turnoverCovered : turnoverCovered,
        redemptionValue: redemptionValue,
        distributionRatio : distributionRatio,
        currency : currency,
        maxDiscount : maxDiscount,
        active : true,
        isApproved : false
      });
      setMaxDiscount('')
      setStartDate('')
      setEndDate('')
      setTurnoverCovered('')
      setRedemptionValue('')
      setDistributionRation('')
      setCurrency('')
      setMaxDiscount('')
      
      toast('New Rewards added.')
    } catch (e) {
      toast('Try again later')
      console.error("Error adding document: ", e);
    }
    setLaoding(false)
    
  };

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <div className="reward">
        <div className="business__title">
          <p>Reward Book</p>
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

        
        <p>Turnover to be covered with CODE2</p>
        <BusinessInput setValue={setTurnoverCovered} currValue={turnoverCovered} type={'number'} />
        <p>Redemption Value</p>
        <BusinessInput setValue={setRedemptionValue} currValue={redemptionValue} type={'number'} />
        <p>Currency</p>
        <BusinessInput setValue={setCurrency} currValue={currency} type={'text'}/>
        <p>Maximum Possible Discount</p>
        <BusinessInput setValue={setMaxDiscount} currValue={maxDiscount} type={'number'} />
        <p>Reward Distribution ratio</p>
        <BusinessInput setValue={setDistributionRation} currValue={distributionRatio} type={'number'} />


        {/* <Dropdown /> */}
        <div className="carbon__save">
          <button onClick={handleSaveBtn} className="carbon__save__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Reward;
