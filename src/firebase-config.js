import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcwLBIaDi7H0yAYA2OL40-WyfsSzNSlBo",
  authDomain: "embehomeautomations.firebaseapp.com",
  projectId: "embehomeautomations",
  storageBucket: "embehomeautomations.firebasestorage.app",
  messagingSenderId: "899940462543",
  appId: "1:899940462543:web:5d68abd3cd7fe7cf44ecba",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };