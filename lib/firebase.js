import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeSnkrDbqP5z5JTbJDbg0H_w6g27GQShQ",
  authDomain: "buildforgeai-8ae96.firebaseapp.com",
  projectId: "buildforgeai-8ae96",
  storageBucket: "buildforgeai-8ae96.firebasestorage.app",
  messagingSenderId: "738784598088",
  appId: "1:738784598088:web:8ca1e050d58a54536da07d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
