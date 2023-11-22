// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKDUX02ODuOlYmfUwFPL14D2myHL8jvCg",
  authDomain: "code2-f958d.firebaseapp.com",
  projectId: "code2-f958d",
  storageBucket: "code2-f958d.appspot.com",
  messagingSenderId: "137337064772",
  appId: "1:137337064772:web:7f1a2f7086c9838e01db11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { db, app, collection }