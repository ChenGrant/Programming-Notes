import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkHlzLIAvpgrbP6RDd-Pp0t6Z4H5_tw6s",
  authDomain: "workout1-44d48.firebaseapp.com",
  projectId: "workout1-44d48",
  storageBucket: "workout1-44d48.appspot.com",
  messagingSenderId: "623810289950",
  appId: "1:623810289950:web:2b8d5c6686def39cc5e90f"
};

/*
initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});*/
initializeApp(firebaseConfig);
export const auth = getAuth();