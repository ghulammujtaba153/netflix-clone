// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUM0PmnSv96iQFgQQmcmZaLfdHS3BnpIQ",
  authDomain: "netflix-f7b09.firebaseapp.com",
  projectId: "netflix-f7b09",
  storageBucket: "netflix-f7b09.appspot.com",
  messagingSenderId: "478975167181",
  appId: "1:478975167181:web:61cc617599edaaab433784"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)