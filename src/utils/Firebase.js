// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxGF-yvHPD1FRmNpOQVy32IJd9UKrd_gs",
  authDomain: "netflixgpt-9dc48.firebaseapp.com",
  projectId: "netflixgpt-9dc48",
  storageBucket: "netflixgpt-9dc48.appspot.com",
  messagingSenderId: "437576248770",
  appId: "1:437576248770:web:7a3a59347adcb9a2c83a5b",
  measurementId: "G-Q5TPZSP2M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();
