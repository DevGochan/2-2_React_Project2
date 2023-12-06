// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Z_MG2TNlhR5WzaaNSPc-S5JDLlIPY5c",
  authDomain: "react-final-project-f9232.firebaseapp.com",
  projectId: "react-final-project-f9232",
  storageBucket: "react-final-project-f9232.appspot.com",
  messagingSenderId: "870227234884",
  appId: "1:870227234884:web:268d88ae9f92c1523cac11",
  measurementId: "G-40WZLQYZFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };