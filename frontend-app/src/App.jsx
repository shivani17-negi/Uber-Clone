import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import UserLogin from "./Pages/UserLogin";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import UserSignup from "./Pages/UserSignup";
import { UserDataContext } from "./context/UserContext";
import Home from "./Pages/Home";
import UserProtectWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout";
import CaptainHome from "./Pages/CaptainHome";
import CaptainProtectWrapper from "./Pages/CaptainProtectWrapper";

const App = () => {
  const ans = useContext(UserDataContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/Signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
