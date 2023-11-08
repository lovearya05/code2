import { collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from './firebaseConfig'
import emailjs from 'emailjs-com';

function Temp() {
  useEffect(() => {
    sendEmail()
  }, [])

  const serviceId = 'service_6sbrjtd'
  const templateId = 'template_6s9rv5a'
  const userId = 'tswF0bxGlMJzKEnZO' // public key

  const emailData = {
    from_code: 123456,
    message: 'Hello, this is the email message!',
    to_email: 'happyarya1405@gmail.com'
  };
  const form = document.createElement('form');
  form.style.display = 'none';
  for (const key in emailData) {
    if (emailData.hasOwnProperty(key)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = emailData[key];
      form.appendChild(input);
    }
  }

  function sendEmail() {
    document.body.appendChild(form);
    emailjs.sendForm(serviceId, templateId, form, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    document.body.removeChild(form);
  }

  // useEffect(()=>{
  //   const dataRef = collection(db, 'co2')
  //   getDocs(dataRef).then(snapshot=>{
  //     snapshot.docs.forEach((doc)=>{
  //       console.log({id: doc.id, ...doc.data() })
  //     })
  //   })
  // },[])

  return (
    <div>

    </div>
  )
}

export default Temp
