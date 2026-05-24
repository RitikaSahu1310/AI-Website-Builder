// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-b59a7.firebaseapp.com",
  projectId: "genwebai-b59a7",
  storageBucket: "genwebai-b59a7.firebasestorage.app",
  messagingSenderId: "442653227447",
  appId: "1:442653227447:web:29f8d5140a9d2b7e23d032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}