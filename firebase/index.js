// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhqeSLa6MulaxHFEPfKtpS91d_ka6Y5Fg",
  authDomain: "react-native-wishlist-app.firebaseapp.com",
  projectId: "react-native-wishlist-app",
  storageBucket: "react-native-wishlist-app.appspot.com",
  messagingSenderId: "789168260738",
  appId: "1:789168260738:web:d9b9d12fb9c948e222d69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {app, db, getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };