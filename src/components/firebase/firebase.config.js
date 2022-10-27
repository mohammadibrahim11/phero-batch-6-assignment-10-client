// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg7-V24qNid_bcqtpcmQ37VS7IUxwKRME",
  authDomain: "assignment-10-authentica-58f9f.firebaseapp.com",
  projectId: "assignment-10-authentica-58f9f",
  storageBucket: "assignment-10-authentica-58f9f.appspot.com",
  messagingSenderId: "492993986590",
  appId: "1:492993986590:web:d5dd1793360d33837eae0f",
  measurementId: "G-HPY6RYS5NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app