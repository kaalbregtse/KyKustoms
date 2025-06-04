// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIobjFI9UVZLoE_zKb0Zf-i5WOR9RTz2E",
  authDomain: "kykustoms-feddb.firebaseapp.com",
  projectId: "kykustoms-feddb",
  storageBucket: "kykustoms-feddb.firebasestorage.app",
  messagingSenderId: "652926314369",
  appId: "1:652926314369:web:fd194f0cb36f639decea80",
  measurementId: "G-4QQR8Q7WPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);