import React from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "../login/Splash";
import Login from "../login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import Temp from "../../Temp";

export default function RoutesServer() {
  return (
    <Routes>
      <Route exact path="/splash" element={<Splash />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/" element={<Profile />}></Route>
      <Route exact path='/temp' element={< Temp />}></Route>
    </Routes>
  );
}
