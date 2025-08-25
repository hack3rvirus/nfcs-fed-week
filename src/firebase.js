// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, set } from "firebase/database";

// TODO: Replace with your project's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-3_b7vWyoGiwjTtWdh8m67iYOlBRLUw",
  authDomain: "nfcs-picnic-groups.firebaseapp.com",
  databaseURL: "https://nfcs-picnic-groups-default-rtdb.firebaseio.com",
  projectId: "nfcs-picnic-groups",
  storageBucket: "nfcs-picnic-groups.firebasestorage.app",
  messagingSenderId: "977251146229",
  appId: "G-K37RKNY5T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database, ref, push, onValue, set };