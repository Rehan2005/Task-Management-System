// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqS7Brh1HNKSGh_4BKtr1qS5hSDU4vwcQ",
  authDomain: "task-manager-f0c8b.firebaseapp.com",
  projectId: "task-manager-f0c8b",
  storageBucket: "task-manager-f0c8b.firebasestorage.app",
  messagingSenderId: "1006271990345",
  appId: "1:1006271990345:web:7e57d084bbeaf72caa0d98",
  measurementId: "G-DNN6P3P5H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);