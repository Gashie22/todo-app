// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbuVKjfzVb3U_-U_HixUEyCMOwf6vXrjk",
  authDomain: "goals-4d81b.firebaseapp.com",
  projectId: "goals-4d81b",
  storageBucket: "goals-4d81b.appspot.com",
  messagingSenderId: "359336083370",
  appId: "1:359336083370:web:b44a41ef2d3ba1bab3b5d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
