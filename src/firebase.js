// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ3n6TB8134NfWd80ddy4INVSWGuwGogU",
  authDomain: "odave-rentals.firebaseapp.com",
  projectId: "odave-rentals",
  storageBucket: "odave-rentals.appspot.com",
  messagingSenderId: "693853762430",
  appId: "1:693853762430:web:620e30fa8506d88a7ff92f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
