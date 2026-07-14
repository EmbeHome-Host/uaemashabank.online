import LoginPage from "./components/LoginPage"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import PhoneAuth from "./components/PhoneAuth";
import DashBoard from "./components/DashBoard";
import { useEffect, useState } from 'react';
import { auth } from "./firebase-config";
import { onAuthStateChanged } from 'firebase/auth';
import "./css/buttons.css";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unRegistered = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
      });
      return () => unRegistered();
    }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/otp" element={<PhoneAuth />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}     

export default App;
