// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-db5ad.firebaseapp.com",
  projectId: "mern-estate-db5ad",
  storageBucket: "mern-estate-db5ad.appspot.com",
  messagingSenderId: "349288157569",
  appId: "1:349288157569:web:8c046677b37e9f7b791880"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);