// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDUiqdwX5XR7AHd4e4-jSqHyUXqLE1Wbl4",
  authDomain: "react-native-wishlist-ap-1a9e3.firebaseapp.com",
  projectId: "react-native-wishlist-ap-1a9e3",
  storageBucket: "react-native-wishlist-ap-1a9e3.appspot.com",
  messagingSenderId: "762850151120",
  appId: "1:762850151120:web:860a386b03807be712acd5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {app, db, getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };