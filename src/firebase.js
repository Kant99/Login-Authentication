// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJNyvOwYhlHva539Ctbpt9vzEI0z3GbwY",
  authDomain: "task1-e8b1b.firebaseapp.com",
  projectId: "task1-e8b1b",
  storageBucket: "task1-e8b1b.appspot.com",
  messagingSenderId: "859890926679",
  appId: "1:859890926679:web:e20a75eebd5228a3cd4f12",
  measurementId: "G-G8385R6Q55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();

export {app , auth};
