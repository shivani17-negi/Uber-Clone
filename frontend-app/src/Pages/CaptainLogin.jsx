import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captain
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
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
      <img
        className="w-16 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="Uber Logo"
      />

      <div>
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
      </div>

      <p className="text-center">
        New here?{" "}
        <Link to="/captain-signup" className="text-blue-600">
          Register as captain
        </Link>
      </p>

      <div>
        <Link
          to="/login"
          className="bg-[#e49f50] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
