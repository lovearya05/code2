import React from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "../login/Splash";
import Login from "../login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import OtpScreen from "../OtpScreen/OtpScreen";
import Temp from "../../Temp";
import Tracker from "../Business/Tracker/Tracker";
import Carbon_Book from "../Business/Carbon_Book/Carbon_Book";
import BusinessProfile from "../Business/Business_profile/BusinessProfile";
import CarbonCredit from "../Business/Carbon_Credit_Book/CarbonCredit";
import Reward from "../Business/Reward/Reward";
import Support from "../Business/Support/Support";
import UpdateDeals from "../Business/Update_Deals/UpdateDeals";
import { useSelector } from "react-redux";
import TrackerConsumer from '../Consumer/Tracker/TrackerConsumer'
import ExploreStoreConsumer from "../Consumer/exploreStore/ExploreStoreConsumer";
import RedeemCODE2 from "../Consumer/redeemCODE2/RedeemCODE2";
import ProfileConsumer from "../Consumer/profileConsumer/ProfileConsumer";
import SupportConsumer from "../Consumer/supportConsumer/SupportConsumer";
import EditProfileConsumer from "../Consumer/profileConsumer/EditProfileConsumer";

export default function RoutesServer() {
  const { user } = useSelector((state) => state?.appData);
  const userType = false ?  "business" : 'consumer';
  return (
    <div style={{ backgroundColor: "#272727", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route exact path="/code2/" element={<Splash />}></Route>
          <Route exact path="/code2/temp" element={<Temp />}></Route>
        </Routes>

        {user && userType === "consumer" && 
        <Routes>
          <Route element={<TrackerConsumer />} />
          <Route index exact path="/code2/trackerConsumer" element={<TrackerConsumer />} />
          <Route exact path="/code2/exploreStoreConsumer" element={<ExploreStoreConsumer />} />
          <Route exact path="/code2/redeemCODE2" element={<RedeemCODE2 />} />
          <Route exact path="/code2/profileConsumer" element={<ProfileConsumer />} />
          <Route exact path="/code2/supportConsumer" element={<SupportConsumer />} />
          <Route exact path="/code2/editProfileConsumer" element={<EditProfileConsumer />} />
          <Route exact path="/code2/profile" element={<Profile />}></Route>
        </Routes>
        
        }

        {user && userType === "business" ? (
          <Routes>
            <Route element={<Tracker />} />
            <Route index exact
              path="/code2/tracker"
              element={<Tracker />}
            ></Route>
            <Route exact
              path="/code2/carbon_book"
              element={<Carbon_Book />}
            ></Route>
            <Route exact
              path="/code2/credit_book"
              element={<CarbonCredit />}
            ></Route>
            <Route exact path="/code2/deals" element={<UpdateDeals />}></Route>
            <Route exact path="/code2/reward" element={<Reward />}></Route>
            <Route exact
              path="/code2/business_profile"
              element={<BusinessProfile />}
            ></Route>
            <Route exact path="/code2/support" element={<Support />}></Route>
            <Route exact path="/code2/profile" element={<Profile />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/code2/login" element={<Login />}></Route>
            <Route exact path="/code2/signup" element={<Signup />}></Route>
          </Routes>
        )}



      </div>
       {" "}
    </div>
  );
}
