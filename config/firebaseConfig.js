// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "collaboratex-b0ce6.firebaseapp.com",
  projectId: "collaboratex-b0ce6",
  storageBucket: "collaboratex-b0ce6.appspot.com",
  messagingSenderId: "962953193751",
  appId: "1:962953193751:web:3426b43434e4710a402f52",
  measurementId: "G-G28EF6JZZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);