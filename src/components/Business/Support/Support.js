import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import "./Support.css";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";



const Support = () => {
  const { user } = useSelector(state => state?.appData)
  const [loading, setLaoding] = useState(false)

  const [issue, setIssue] = useState('');

  const handlePost =()=>{
    if(!issue || issue.length==0) {
      toast('please enter message first')
      return
    }
    submitTicket()
  }

  const submitTicket = async () => {
    setLaoding(true)
    
    try {
      const docRef = await addDoc(collection(db, "supportTicket"), {
        entityName: 'code2 support ticket',
        entityUserId: user?.uid,
        issueDescription: issue,
        status : 'open',
        active : true,
        isApproved : false,
        suppoerProfile : 'business'
      });
      toast('Support message sent')
      setIssue('')
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
      <div className="support">
        <div className="business__title">
          <p>Support</p>
        </div>
        <div className="support__details">
          <p className="support__company">CODE2</p>
          <p className="support__contact">+3456 567 89</p>
        </div>
        <div className="support__inputBox">
          <textarea rows="2" placeholder="Write something.." value={issue} onChange={(e)=>setIssue(e.target.value)} />
        </div>
        <button className="support__post" onClick={handlePost} >Post</button>
      </div>
    </div>
  );
};

export default Support;
