import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

initializeApp({
  apiKey: "AIzaSyDNxlhGq29tB-tNf-LREQF_HD7l7qCXtn0",
  authDomain: "calorie-tracker1.firebaseapp.com",
  projectId: "calorie-tracker1",
  storageBucket: "calorie-tracker1.appspot.com",
  messagingSenderId: "503483266077",
  appId: "1:503483266077:web:e11c6a6261acf50b3802f4",
});

export const firestore = getFirestore();
export const auth = getAuth();
