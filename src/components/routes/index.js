import React from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "../login/Splash";
import Login from "../login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import OtpScreen from "../OtpScreen/OtpScreen";
import Temp from "../../Temp";

export default function RoutesServer() {

    return (
        <div style={{ backgroundColor: "#272727", width: "100%" }}>
            <div
                style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
            >
                <Routes>
                    <Route exact path="/code2/" element={<Splash />}></Route>
                    <Route exact path="/code2/login" element={<Login />}></Route>
                    <Route exact path="/signup" element={<Signup />}></Route>
                    <Route exact path="/code2/profile" element={<Profile />}></Route>
                    {/* <Route exact path="/otp" element={<OtpScreen />}></Route> */}
                    <Route exact path='/code2/temp' element={< Temp />}></Route>
                    {/* <Route exact path='/signup' element={< Signup />}></Route> */}
                </Routes>
            </div>
        </div>
    );
}
