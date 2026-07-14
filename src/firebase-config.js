import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCcwLBIaDi7H0yAYA2OL40-WyfsSzNSlBo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "embehomeautomations.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "embehomeautomations",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "embehomeautomations.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "899940462543",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:899940462543:web:5d68abd3cd7fe7cf44ecba",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };