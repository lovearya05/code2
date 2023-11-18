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
import AdminTracker from "../Admin/Tracker/AdminTracker";
import AdminSupport from "../Admin/Support/AdminSupport";
import AdminSupportPage from "../Admin/Support/AdminSupportPage";
import PaymentTracker from "../Admin/PaymentTracker/PaymentTracker";
import AdditionalFee from "../Admin/PaymentTracker/AdditionalFee";
import Factor from "../Admin/Factor/Factor";
import FactorList from "../Admin/Factor/FactorList";

export default function RoutesServer() {
  const { user } = useSelector((state) => state?.appData);
  const userType = "business";
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

        {user && userType === "business" ? (
          <Routes>
            <Route element={<Tracker />} />
            <Route
              index
              exact
              path="/code2/tracker"
              element={<Tracker />}
            ></Route>
            <Route
              exact
              path="/code2/carbon_book"
              element={<Carbon_Book />}
            ></Route>
            <Route
              exact
              path="/code2/credit_book"
              element={<CarbonCredit />}
            ></Route>
            <Route exact path="/code2/deals" element={<UpdateDeals />}></Route>
            <Route exact path="/code2/reward" element={<Reward />}></Route>
            <Route
              exact
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
            <Route
              exact
              path="/code2/admin-tracker"
              element={<AdminTracker />}
            ></Route>
            <Route
              exact
              path="/code2/payment-tracker"
              element={<PaymentTracker />}
            ></Route>
            <Route exact path="/code2/factor" element={<Factor />}></Route>
            <Route
              exact
              path="/code2/admin-supportpage"
              element={<AdminSupportPage />}
            ></Route>
            <Route
              exact
              path="/code2/additionalfee"
              element={<AdditionalFee />}
            ></Route>
            <Route
              exact
              path="/code2/admin-support"
              element={<AdminSupport />}
            ></Route>
          </Routes>
        )}
      </div>
       {" "}
    </div>
  );
}
