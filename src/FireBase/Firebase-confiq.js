// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-7avkjXxum38NyfeGS6Mickp_8ErSKjM",
  authDomain: "to-do-task-bb0d0.firebaseapp.com",
  projectId: "to-do-task-bb0d0",
  storageBucket: "to-do-task-bb0d0.appspot.com",
  messagingSenderId: "219937750255",
  appId: "1:219937750255:web:eb35e01b90ed25d8302f1a",
  measurementId: "G-PV3BXNFYHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider()
export {auth ,provider }
