import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCW6yRSS0qDxth0Vs-9EV4NHMO3KaSrp_4",
  authDomain: "banking-site-b979a.firebaseapp.com",
  projectId: "banking-site-b979a",
  storageBucket: "banking-site-b979a.appspot.com",
  messagingSenderId: "465943799852",
  appId: "1:465943799852:web:c40e9657425f99aada4989",
  measurementId: "G-3R83RQ94SK"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();

export { app, auth, analytics, firebase };