import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZuuh6QoefmIzpfWAySb8nr5lIhDVxJr8",
  authDomain: "dr-visual-6e010.firebaseapp.com",
  projectId: "dr-visual-6e010",
  storageBucket: "dr-visual-6e010.firebasestorage.app",
  messagingSenderId: "158385080742",
  appId: "1:158385080742:web:eb49b77975e2d86e392767",
  measurementId: "G-M0EZ0YPW1Q"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app); 