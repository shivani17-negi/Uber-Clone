import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin';
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignup from './Pages/CaptainSignup';
import UserSignup from './Pages/UserSignup';
import { UserDataContext } from "./assets/context/UserContext";



const App = () => {
   const ans = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/Signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
}

export default App