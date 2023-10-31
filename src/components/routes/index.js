import React from 'react'
import {Routes, Route} from "react-router-dom"
import Splash from '../login/Splash'

export default function RoutesServer(){
    return (
    <Routes>
        <Route exact path='/' element={< Splash />}></Route>
        {/* <Route exact path='/login' element={< Login />}></Route> */}
        {/* <Route exact path='/signup' element={< Signup />}></Route> */}
        {/* <Route exact pah='/profile' element={< Profile />}></Route> */}

    </Routes>   
    )
}