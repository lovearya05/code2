import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./UpdateDeals.css";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Loader from "../../login/EssentialComponents/Loader";
import toast from "react-simple-toasts";
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";
import { getCurrentDateTimeString } from "../../utilFunctions";


const UpdateDeals = () => {
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);
  const [itemForDiscount, setItemForDiscount] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");

  const handleSaveBtn = () => {
    if (!itemForDiscount || itemForDiscount.length == 0 || !maxDiscount) {
      toast("fill details first");
      return;
    }
    if (isNaN(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
      toast("please enter a valid discount");
      return;
    }
    addnewDeal();
  };
  const addnewDeal = async () => {
    setLaoding(true);

    try {
      const docRef = await addDoc(collection(db, "allDeals"), {
        companyName: "code2 new deal",
        companyUserId: user?.uid,
        itemForDiscount: itemForDiscount,
        active: true,
        maxDiscount : maxDiscount,
        isApproved : false,
        cDate : getCurrentDateTimeString()
      });
      setMaxDiscount("");
      setItemForDiscount("");
      toast("New deal added successfully");
    } catch (e) {
      toast("Try again later");
      console.error("Error adding document: ", e);
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
      <div className="deals">
        <div className="business__title">
          <p>New Deals</p>
          <p className="newDiscount">
            Introduce{" "}
            <span className="discountHighlight">New Discount Deals</span> for
            your valued customers!{" "}
          </p>
        </div>
        <div className="deals__input">
          <div className="deals__input1">
            <p>Enter items for discount</p>
            <input
              onChange={(e) => setItemForDiscount(e.target.value)}
              value={itemForDiscount}
              style={{ color: "white", fontSize: 14 }}
              type="text"
              placeholder="Eg.Home decor"
            />
          </div>
          <div className="deals__input2">
            <p>Set Max Discount</p>
            <input
              onChange={(e) => setMaxDiscount(e.target.value)}
              value={maxDiscount}
              style={{ color: "white", fontSize: 14 }}
              type="text"
              placeholder="Eg. 20% "
            />
          </div>
        </div>
        <div className="deals__save">
          <button onClick={handleSaveBtn} className="deals__save__button">
            Update Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDeals;
