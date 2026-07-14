import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCcwLBIaDi7H0yAYA2OL40-WyfsSzNSlBo",
  authDomain: "embehomeautomations.firebaseapp.com",
  projectId: "embehomeautomations",
  storageBucket: "embehomeautomations.firebasestorage.app",
  messagingSenderId: "899940462543",
  appId: "1:899940462543:web:5d68abd3cd7fe7cf44ecba"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();

export { app, auth, analytics, firebase };