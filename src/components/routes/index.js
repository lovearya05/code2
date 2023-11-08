import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useNavigation } from "react-router-dom"
import Splash from '../login/Splash'
import Temp from '../../Temp'
import SignUp from '../login/SignUp'

export default function RoutesServer() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [showSplash, setShowSplash] = useState(true)
    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            // navigation.useNavigate()
        },2000)
    },[])

    return (
        <>
            {
                isLoggedIn ?
                    <Routes>
                        <Route exact path='/' index element={< Splash />}></Route>
                        <Route exact path='/SignUp' element={<SignUp />}></Route>
                    </Routes> :
                    <Routes>
                        <Route exact index path='/temp' element={< Temp />}></Route>
                    </Routes>

            }
        </>
    )
}