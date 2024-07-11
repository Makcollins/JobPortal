// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwT2nXEGzLmC6eiotiAwzQ0z0C-UZIT74",
  authDomain: "maworks-job-portal.firebaseapp.com",
  projectId: "maworks-job-portal",
  storageBucket: "maworks-job-portal.appspot.com",
  messagingSenderId: "235956785568",
  appId: "1:235956785568:web:87dfd2c39f8e77a622d4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;