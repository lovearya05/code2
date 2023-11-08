import { collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from './firebaseConfig'

function Temp() {

  useEffect(()=>{
    const dataRef = collection(db, 'co2')
    getDocs(dataRef).then(snapshot=>{
      snapshot.docs.forEach((doc)=>{
        console.log({id: doc.id, ...doc.data() })
      })
    })


  },[])

  return (
    <div>
      
    </div>
  )
}

export default Temp
