import React, { useEffect, useState } from "react";
import "./TrackerConsumer.css";
// import Navbar from "../../Navbar/Navbar";
import TrackerBox from "./TrackerBoxConsumer";
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
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import {
  CircularBtn,
  RecentTransectionCard,
  EarnedCode2Card,
} from "../utilityComponents";
import { getAllData } from "../../utilityFunction";
import { getDateMonthYear } from "../../utilFunctions";

import ConsumerWebNavbar from "../../WebNavbar.js/ConsumerWebNavbar";

const TrackerConsumer = () => {
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);
  const [listToShow, setListToShow] = useState("transection");
  const [allDeals, setAllDeals] = useState([]);

  useEffect(() => {
    // loadInitalData()
    loadDealsData();
  }, [user]);

  const loadDealsData = async () => {
    const data = await getAllData(
      db,
      "allDeals",
      "active",
      true,
      () => setLaoding(true),
      () => setLaoding(false)
    );
    console.log({ data });
    setAllDeals(data);
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="tc__mob__navbar">
        <NavbarConsumer />
      </div>
      <div className="tc__web__navbar">
        <ConsumerWebNavbar />
      </div>
      <div className="track__consumer">
        <div className="tracker">
          <div className="business__title">
            <p>Tracker</p>
          </div>
          <div className="business__boxes">
            <TrackerBox value={40.8} colorBox="#f0ad00" value2="CO2 Earned" />

            <TrackerBox value={10} colorBox="#FFF" value2="CODE2 Redeemed" />
            <TrackerBox value="31" colorBox="#FFF" value2="CODE2 Balance" />
            <TrackerBox value="40.8" colorBox="#FFF" value2="CO2 Avoidance" />
          </div>
          <div className="PointsButtonsDiv">
            <CircularBtn
              onClickBtn={() => setListToShow("transection")}
              isActive={listToShow === "transection"}
              text="Recent Transactions"
            />
            <div style={{ width: 8 }}></div>
            <CircularBtn
              onClickBtn={() => setListToShow("code2Earned")}
              isActive={listToShow === "code2Earned"}
              text="Earned Code 2"
            />
          </div>
        </div>

        {listToShow === "transection" && (
          <div>
            <RecentTransectionCard showTopLine={false} />
            <RecentTransectionCard />
            <RecentTransectionCard />
          </div>
        )}

        {listToShow === "code2Earned" && (
          <div>
            {allDeals.map((item, i) => {
              return (
                <EarnedCode2Card
                  key={i}
                  maxDiscount={item?.maxDiscount}
                  companyName={item?.itemForDiscount}
                  dateString={getDateMonthYear(item?.cDate)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackerConsumer;
