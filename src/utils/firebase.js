// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKFO86cemBowR08GnL8ptmEYLjwCe6FEM",
  authDomain: "gpt-netflix-7.firebaseapp.com",
  projectId: "gpt-netflix-7",
  storageBucket: "gpt-netflix-7.appspot.com",
  messagingSenderId: "822961500160",
  appId: "1:822961500160:web:a541f7ca8d4233db0da8e5",
  measurementId: "G-LDHSN0FDQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();