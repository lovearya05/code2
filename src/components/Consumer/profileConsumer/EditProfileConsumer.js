import React, { useEffect, useState } from "react";
import NavbarConsumer from "../navbarConsumer/NavbarConsumer";
import "./ProfileConsumer.css";
import "./EditProfileConsumer.css";
import ProfileComponent from "./ProfileComponent";
import profileIcon from '../assets/profileIcon.svg'
import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';
import { updateOrCreateData, getData } from '../../utilityFunction';
import { getCurrentDateTimeString} from '../../utilFunctions';
import { useSelector } from 'react-redux';
import Loader from '../../login/EssentialComponents/Loader';
import { db } from "../../../firebaseConfig";
import ConsumerWebNavbar from "../../WebNavbar.js/ConsumerWebNavbar";

function EditProfileConsumer() {
  const [profileData, setProfileData] = useState({
    userName: "",
    contactNumber: "",
    email: "",
    profession: "",
    address1: "",
    address2: "",
    typicallyBuy: "",
    lookingToBuy: "",
  });
  const { user } = useSelector((state) => state?.appData);
  const [loading, setLaoding] = useState(false);

  const handleSaveBtn = async () => {
    if (
      !profileData.userName ||
      !profileData.contactNumber ||
      !profileData.email ||
      !profileData.profession ||
      !profileData.address1 ||
      !profileData.address2 ||
      !profileData.typicallyBuy ||
      !profileData.lookingToBuy
    ) {
      toast("please fill all the fields first");
      return;
    }
    if (profileData.contactNumber.length != 10) {
      toast("mobile number invalid");
      return;
    }
    await updateOrCreateData(
      db,
      "consumerProfile",
      "uid",
      user?.uid,
      { ...profileData, uid: user?.uid },
      () => setLaoding(true),
      () => setLaoding(false)
    );
  };
  useEffect(() => {
    loadInitalData();
  }, []);
  const loadInitalData = async () => {
    const data = await getData(
      db,
      "consumerProfile",
      "uid",
      user?.uid,
      () => setLaoding(true),
      () => setLaoding(false)
    );
    if (data) {
      setProfileData({
        userName: data?.userName,
        contactNumber: data?.contactNumber,
        email: data?.email,
        profession: data?.profession,
        address1: data?.address1,
        address2: data?.address2,
        typicallyBuy: data?.typicallyBuy,
        lookingToBuy: data?.lookingToBuy,
      });
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="ep__mob__navbar">
        <NavbarConsumer />
      </div>
      <div className="ep__web__navbar">
        <ConsumerWebNavbar />
      </div>
      <div className="edit__consumer">
        <div className="business__profile">
          <div className="profile__front">
            {/* <div className="business__title"> */}
            <p>Edit Profile</p>
            {/* </div> */}
          </div>
          <div className="allCenter ">
            <img src={profileIcon} alt="" />
          </div>
        </div>
        <div>
          <div className="paddHori">
            <div className="edit__input1">
              <p>Name</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, userName: e.target.value };
                  })
                }
                value={profileData.userName}
                type="text"
                placeholder="Eg. Reshma"
              />
            </div>

            <div className="edit__input1">
              <p>Contact number</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, contactNumber: e.target.value };
                  })
                }
                value={profileData.contactNumber}
                type="text"
                placeholder="1234567890"
              />
            </div>

            <div className="edit__input1">
              <p>Email</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, email: e.target.value };
                  })
                }
                value={profileData.email}
                type="text"
                placeholder="roger@gmail.com"
              />
            </div>

            <div className="edit__input1">
              <p>Profession</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, profession: e.target.value };
                  })
                }
                value={profileData.profession}
                type="text"
                placeholder="Engineer"
              />
            </div>

            <div className="edit__input1">
              <p>Address</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, address1: e.target.value };
                  })
                }
                value={profileData.address1}
                type="text"
                placeholder="Address line 1"
              />
            </div>

            <div className="edit__input1">
              {/* <p>Address</p> */}
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, address2: e.target.value };
                  })
                }
                value={profileData.address2}
                type="text"
                placeholder="Address line 2"
              />
            </div>

            <div className="edit__input1">
              <p>I typically buy</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, typicallyBuy: e.target.value };
                  })
                }
                value={profileData.typicallyBuy}
                type="text"
                placeholder="Furniture, Grocery"
              />
            </div>

            <div className="edit__input1">
              <p>I am actively looking to buy</p>
              <input
                onChange={(e) =>
                  setProfileData((p) => {
                    return { ...p, lookingToBuy: e.target.value };
                  })
                }
                value={profileData.lookingToBuy}
                type="text"
                placeholder="Dining table"
              />
            </div>
          </div>
          <div className="profile_save">
            <button onClick={handleSaveBtn} className="deals__save__button">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* <div className="profile__data">
        <ProfileComponent left="Name" right="Roger Grahame" />
        <ProfileComponent left="Contact no." right="971509128577" />
        <ProfileComponent left="Email" right="roger@gmail.com" />
        <ProfileComponent left="Profession" right="Engineer" />
        <ProfileComponent left="Address" right="1 High Street, London" />
        <ProfileComponent left="I typically buy" right="Furniture, Grocery" />
        <ProfileComponent left="Actively looking to buy" right="Dining table" />

      </div> */}
    </div>
  );
}

export default EditProfileConsumer;
