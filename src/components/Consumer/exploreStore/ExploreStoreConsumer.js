import React, { useEffect, useState } from "react";
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import "./ExploreStoreConsumer.css";
import { EarnedCode2Card } from "../utilityComponents";
import { getAllData } from "../utilityFunction";
import { db } from "../../../firebaseConfig";
import { useSelector } from "react-redux";
import Loader from "../../login/EssentialComponents/Loader";
import {
  getCurrentDateTimeString,
  getDateMonthYear,
} from "../../../utils/utilFunctions";
import ConsumerWebNavbar from "../../WebNavbar.js/ConsumerWebNavbar";

function ExploreStoreConsumer() {
  const [allDeals, setAllDeals] = useState([]);
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const data = await getAllData(
      db,
      "rewardBook",
      "active",
      true,
      () => setLaoding(true),
      () => setLaoding(false)
    );
    setAllDeals(data);
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="explore__mob__navbar">
        <NavbarConsumer />
      </div>
      <div className="explore__web__navabr">
        <ConsumerWebNavbar />
      </div>
      <div className="explore__main">
        <div className="flexCenter">
          <div className="text1explore">Stores</div>
          <div className="yellowText blackTextExplore">Supports CODE2 pt.</div>
        </div>

        <div className="paddHori16">
          <div className="text2Explore">Deals for you(10)</div>
        </div>

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
      </div>
    </div>
  );
}

export default ExploreStoreConsumer;
