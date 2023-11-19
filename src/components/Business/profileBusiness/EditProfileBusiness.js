import React, { useEffect, useState } from 'react'
// import NavbarConsumer from '../navbarConsumer/NavbarConsumer'
import "./ProfileBusiness.css";
import "./EditProfileBusiness.css";
// import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';
import { updateOrCreateData, getData } from '../../utilityFunction';
import { getCurrentDateTimeString} from '../../utilFunctions';
import { useSelector } from 'react-redux';
import Loader from '../../login/EssentialComponents/Loader';
import { db } from "../../../firebaseConfig";
import Navbar from "../../Navbar/Navbar";
import BusinessWebNavbar from "../../WebNavbar.js/BusinessWebNavbar";


function EditProfileConsumer() {
    const [profileData, setProfileData] = useState({
        company: '',
        address: '',
        mainBusinessActivity: '',
        additionalBusinessActivity: '',
        POCName: '',
        POCEmail: '',
        POCPhone: '',
        additionalName1: '',
        additionalEmail1: '',
        additionalPhone1: '',
        additionalName2: '',
        additionalEmail2: '',
        additionalPhone2: '',
    })
    const { user } = useSelector(state => state?.appData)
    const [loading, setLaoding] = useState(false)

    const handleSaveBtn = async () => {
        if (
            !profileData.company ||
            !profileData.address ||
            !profileData.mainBusinessActivity ||
            !profileData.additionalBusinessActivity ||
            !profileData.POCName ||
            !profileData.POCEmail ||
            !profileData.POCPhone ||
            !profileData.additionalName1 ||
            !profileData.additionalEmail1 ||
            !profileData.additionalPhone1 ||
            !profileData.additionalName2 ||
            !profileData.additionalEmail2 ||
            !profileData.additionalPhone2
        ) {
            toast('please fill all the fields first')
            return
        }
        await updateOrCreateData(db, 'businessProfile', 'uid', user?.uid,
         { ...profileData,
           uid: user?.uid, 
           active : true,
           cDate : getCurrentDateTimeString()
        },
            () => setLaoding(true), () => setLaoding(false))
    }

    useEffect(() => {
        loadInitalData()
    }, [user])
    const loadInitalData = async () => {
        const data = await getData(db, 'businessProfile', 'uid', user?.uid, () => setLaoding(true), () => setLaoding(false))
        if (data) {
            setProfileData({
                company: data?.company,
                address: data?.address,
                mainBusinessActivity: data?.mainBusinessActivity,
                additionalBusinessActivity: data?.additionalBusinessActivity,
                POCName: data?.POCName,
                POCEmail: data?.POCEmail,
                POCPhone: data?.POCPhone,
                additionalName1: data?.additionalName1,
                additionalEmail1: data?.additionalEmail1,
                additionalPhone1: data?.additionalPhone1,
                additionalName2: data?.additionalName2,
                additionalEmail2: data?.additionalEmail2,
                additionalPhone2: data?.additionalPhone2,
            })
        }
    }

    return (
        <div>
            {loading && <Loader />}
            {/* <NavbarConsumer /> */}
            <div className="BusinessMobNavbar">
                <Navbar />
            </div>
            <div className="BusinessWebNavbar">
                <BusinessWebNavbar />
            </div>

            <div className="business__profile">
                <div className="profile__front">
                    <div className="business__title">
                        <p>Edit Profile</p>
                    </div>
                </div>
                <div className='allCenter ' >
                    <img src={profileIcon} alt='' />
                </div>
            </div>
            <div>

                <div className='paddHori'>
                    <div className="edit__input1">
                        <p>Company</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, company: e.target.value }
                        })} value={profileData.company} type="text" placeholder="Eg. Reshma" />
                    </div>

                    <div className="edit__input1">
                        <p>Address</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, address: e.target.value }
                        })} value={profileData.address} type="text" placeholder="e.g Alkifaaf, Dubai, UAE " />
                    </div>

                    <div className="edit__input1">
                        <p>Main Business Activity</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, mainBusinessActivity: e.target.value }
                        })} value={profileData.mainBusinessActivity} type="text" placeholder="Telecom" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional Business Activities</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalBusinessActivity: e.target.value }
                        })} value={profileData.additionalBusinessActivity} type="text" placeholder="Smart Cities" />
                    </div>

                    <div className="edit__input1">
                        <p>POC Name</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, POCName: e.target.value }
                        })} value={profileData.POCName} type="text" placeholder="Simon Williams" />
                    </div>

                    <div className="edit__input1">
                        <p>POC Email</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, POCEmail: e.target.value }
                        })} value={profileData.POCEmail} type="text" placeholder="simon@etisalat.ae" />
                    </div>

                    <div className="edit__input1">
                        <p>POC Phone</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, POCPhone: e.target.value }
                        })} value={profileData.POCPhone} type="text" placeholder="971509128576" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional user name</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalName1: e.target.value }
                        })} value={profileData.additionalName1} type="text" placeholder="Peter Rodric" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional user email</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalEmail1: e.target.value }
                        })} value={profileData.additionalEmail1} type="text" placeholder="peter@etisalat.ae" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional user phone</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalPhone1: e.target.value }
                        })} value={profileData.additionalPhone1} type="text" placeholder="971509128574" />
                    </div>

                    {/* additional 1 */}
                    <div className="edit__input1">
                        <p>Additional user name</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalName2: e.target.value }
                        })} value={profileData.additionalName2} type="text" placeholder="Charles Jacob" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional user email</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalEmail2: e.target.value }
                        })} value={profileData.additionalEmail2} type="text" placeholder="charles@etisalat.ae" />
                    </div>

                    <div className="edit__input1">
                        <p>Additional user phone</p>
                        <input onChange={(e) => setProfileData(p => {
                            return { ...p, additionalPhone2: e.target.value }
                        })} value={profileData.additionalPhone2} type="text" placeholder="971509128575" />
                    </div>


                </div>
                <div className="profile_save">
                    <button onClick={handleSaveBtn} className="deals__save__button">Save</button>
                </div>
            </div>

        </div>
    );
}

export default EditProfileConsumer
