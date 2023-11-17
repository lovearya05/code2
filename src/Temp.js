import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import emailjs from "emailjs-com";

function Temp() {
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("happyarya1405@gmail.com"); /////////
  useEffect(() => {
    // sendEmail()
  }, []);

  const serviceId = "service_6sbrjtd";
  const templateId = "template_6s9rv5a";
  const userId = "tswF0bxGlMJzKEnZO"; // public key

  function sendEmail() {
    const otp = parseInt(Math.random() * 1000000);
    setOTP(otp);
    console.log(otp);

    const emailData = {
      from_code: otp,
      message: "Thank You for Registration!",
      to_email: email,
    };

    const form = document.createElement("form");
    form.style.display = "none";
    for (const key in emailData) {
      if (emailData.hasOwnProperty(key)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = emailData[key];
        form.appendChild(input);
      }
    }
    document.body.appendChild(form);
    emailjs.sendForm(serviceId, templateId, form, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    document.body.removeChild(form);
  }

  // const handleSave = async () => {
  //   setLaoding(true)

  //   try {
  //     const docRef = await addDoc(collection(db, "rewardBook"), {
  //       companyName: 'code2 new deal',
  //       companyUserId: user?.uid,
  //       startDate : startDate,
  //       endDate : endDate,
  //       turnoverCovered : turnoverCovered,
  //       redemptionValue: redemptionValue,
  //       distributionRatio : distributionRatio,
  //       currency : currency,
  //       maxDiscount : maxDiscount,
  //       active : true,
  //       isApproved : false
  //     });

  //   } catch (e) {
  //     toast('Try again later')
  //     console.error("Error adding document: ", e);
  //   }
  //   setLaoding(false)

  // };

  // useEffect(()=>{
  // fetchDataFromFirebase()
  // },[])
  const fetchDataFromFirebase = () => {
    const dataRef = collection(db, "co2");
    getDocs(dataRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log({ id: doc.id, ...doc.data() });
      });
    });
  };

  return <div></div>;
}

export default Temp;
