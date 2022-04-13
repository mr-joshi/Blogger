// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz2kdtDx37sQWOl2Ox4ldnFNQU50yNZ90",
  authDomain: "fir-12e38.firebaseapp.com",
  projectId: "fir-12e38",
  storageBucket: "fir-12e38.appspot.com",
  messagingSenderId: "737295344648",
  appId: "1:737295344648:web:3bcac1167324d10d265dbd",
  measurementId: "G-88G8KPVCCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);