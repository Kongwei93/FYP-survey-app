// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHvXxzD7tv1ghrXXLQLb4oXFfzx6tPB4",
  authDomain: "survey-app-fyp.firebaseapp.com",
  databaseURL:
    "https://survey-app-fyp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "survey-app-fyp",
  storageBucket: "survey-app-fyp.appspot.com",
  messagingSenderId: "567331741961",
  appId: "1:567331741961:web:947fc482c11410050f73d8",
  measurementId: "G-Q5KFW1KB9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
