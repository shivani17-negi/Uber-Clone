import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 flex flex-col min-h-screen">
      <div className="flex items-center mb-10">
        <h1 className="text-2xl font-bold">Uber</h1>
        <span className="ml-1">→</span>
      </div>

      <form onSubmit={submitHandler} className="flex-1 flex flex-col">
        <div className="mb-6">
          <label className="block font-medium mb-3">What's our captain name</label>
          <div className="flex gap-3 mb-6">
            <input
              required
              className="bg-gray-100 rounded px-4 py-3 w-1/2"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-gray-100 rounded px-4 py-3 w-1/2"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-3">What's your email</label>
          <input
            required
            className="bg-gray-100 rounded px-4 py-3 w-full mb-2"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block font-medium mb-3">Enter Password</label>
          <input
            required
            className="bg-gray-100 rounded px-4 py-3 w-full mb-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-black text-white font-medium rounded py-3 w-full mb-5"
          type="submit"
        >
          Login
        </button>

        <p className="text-center mb-12">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>

        <div className="mt-auto pt-16 text-xs text-gray-600">
          This site is protected by reCAPTCHA and the{" "}
          <a href="#" className="text-blue-600">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600">
            Terms of Service
          </a>{" "}
          apply.
        </div>
      </form>
    </div>
  );
};

export default CaptainSignup;
