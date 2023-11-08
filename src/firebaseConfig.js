// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8pgXS9AQA9xZquq3BoU5sjTm7GBbVKIY",
  authDomain: "code2-5dcc9.firebaseapp.com",
  projectId: "code2-5dcc9",
  storageBucket: "code2-5dcc9.appspot.com",
  messagingSenderId: "872492276009",
  appId: "1:872492276009:web:00282dbeec296bc7c63f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { db, app, collection }