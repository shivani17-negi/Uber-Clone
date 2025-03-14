import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

 const submitHandler = async (e) => {
   e.preventDefault();

   const userData = {
     email: email,
     password: password,
   };

   try {
     const response = await axios.post(
       `${import.meta.env.VITE_BASE_URL}/users/login`,
       userData
     );

     if (response.status === 200) {
       const data = response.data;
       setUser(data.user); // Use the setUser from context
       localStorage.setItem("token", data.token); // Use setItem, not getItem
       navigate("/home");
     }

     setEmail("");
     setPassword("");
   } catch (error) {
     console.error(
       "Login failed:",
       error.response?.data?.message || error.message
     );
   }
 };

  return (
    <div className="p-7 h-screen flex flex-col justify-between bg-white">
      <div>
        <h1 className="text-2xl font-bold mb-6">Uber</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-6">
            <label className="block mb-2">What's your email</label>
            <input
              required
              className="bg-gray-100 w-full p-3 rounded"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">Enter Password</label>
            <input
              required
              className="bg-gray-100 w-full p-3 rounded"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-black text-white w-full py-3 rounded mb-4"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="text-center mb-8">
          <p>
            Join a fleet?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </div>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
