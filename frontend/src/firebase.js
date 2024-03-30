// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "findrealestate-a7e95.firebaseapp.com",
  projectId: "findrealestate-a7e95",
  storageBucket: "findrealestate-a7e95.appspot.com",
  messagingSenderId: "283208954166",
  appId: "1:283208954166:web:210c59b0e9509f8a834397",
  measurementId: "G-HC2V9270J1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
