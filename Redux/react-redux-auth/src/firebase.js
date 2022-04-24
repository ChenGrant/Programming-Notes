import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyAeh6OlH6_25_30t3mDvisVvUH4RNMtZhA",
  authDomain: "react-redux-f992f.firebaseapp.com",
  projectId: "react-redux-f992f",
  storageBucket: "react-redux-f992f.appspot.com",
  messagingSenderId: "270649260542",
  appId: "1:270649260542:web:3a3198271a31bb1c3b68af",
});

export const auth = getAuth();
export const db = getFirestore();
