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
import CarbonCredit from "../Business/Carbon_Credit_Book/CarbonCredit";
import Reward from "../Business/Reward/Reward";
import Support from "../Business/Support/Support";
import UpdateDeals from "../Business/Update_Deals/UpdateDeals";
import { useSelector } from "react-redux";
import AdminTracker from "../Admin/Tracker/AdminTracker";
import AdminSupport from "../Admin/Support/AdminSupport";
import AdminSupportPage from "../Admin/Support/AdminSupportPage";
import PaymentTracker from "../Admin/PaymentTracker/PaymentTracker";
import AdditionalFee from "../Admin/PaymentTracker/AdditionalFee";
import Factor from "../Admin/Factor/Factor";
import FactorList from "../Admin/Factor/FactorList";
import TrackerConsumer from "../Consumer/Tracker/TrackerConsumer";
import ExploreStoreConsumer from "../Consumer/exploreStore/ExploreStoreConsumer";
import RedeemCODE2 from "../Consumer/redeemCODE2/RedeemCODE2";
import ProfileConsumer from "../Consumer/profileConsumer/ProfileConsumer";
import SupportConsumer from "../Consumer/supportConsumer/SupportConsumer";
import EditProfileConsumer from "../Consumer/profileConsumer/EditProfileConsumer";
import ProfileBusiness from "../Business/profileBusiness/ProfileBusiness"
import EditProfileBusiness from "../Business/profileBusiness/EditProfileBusiness"

export default function RoutesServer() {
  const { user, userProfileType } = useSelector((state) => state?.appData);
  // const userType = false ?  "business" : 'consumer';
  const userType = userProfileType;

  return (
    <div style={{ backgroundColor: "#272727", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
        <Routes>
          <Route exact path="/code2/" element={<Splash />}></Route>
          <Route exact path="/code2/temp" element={<Temp />}></Route>
          <Route exact path="/code2/login" element={<Login />}/>
          <Route exact path="/code2/signup" element={<Signup />}/>
        </Routes>

        
        {user && <Routes>
          <Route exact path="/code2/admin-tracker" element={<AdminTracker />} />
          <Route exact path="/code2/payment-tracker" element={<PaymentTracker />} />
          <Route exact path="/code2/factor" element={<Factor />}></Route>
          <Route exact path="/code2/admin-supportpage" element={<AdminSupportPage />}/>
          <Route exact path="/code2/additionalfee" element={<AdditionalFee />} />
          <Route exact path="/code2/admin-support" element={<AdminSupport />} />

            {/* this profile is of user type business or consumer  */}
          <Route exact path="/code2/profile" element={<Profile />}/> 
        </Routes>}

        {user && userType === "consumer" &&
        <Routes>
          <Route element={<TrackerConsumer />} />
          <Route index exact path="/code2/trackerConsumer" element={<TrackerConsumer />} />
          <Route exact path="/code2/exploreStoreConsumer" element={<ExploreStoreConsumer />} />
          <Route exact path="/code2/redeemCODE2" element={<RedeemCODE2 />} />
          <Route exact path="/code2/profileConsumer" element={<ProfileConsumer />} />
          <Route exact path="/code2/supportConsumer" element={<SupportConsumer />} />
          <Route exact path="/code2/editProfileConsumer" element={<EditProfileConsumer />} />
        </Routes>}
        
        {user && userType === "business"  &&
          <Routes>
            <Route element={<Tracker />} />
            <Route index exact path="/code2/tracker" element={<Tracker />} />
            <Route exact path="/code2/carbon_book" element={<Carbon_Book />}/>
            <Route exact path="/code2/credit_book" element={<CarbonCredit />}/>
            <Route exact path="/code2/deals" element={<UpdateDeals />}/>
            <Route exact path="/code2/reward" element={<Reward />}/>
            <Route exact path="/code2/ProfileBusiness" element={<ProfileBusiness />}/>
            <Route exact path="/code2/EditProfileBusiness" element={<EditProfileBusiness />}/>
            <Route exact path="/code2/support" element={<Support />}/>
          </Routes>}
      </div>
    </div>
  );
}
