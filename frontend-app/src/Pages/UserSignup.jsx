import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">Uber</h1>

          <form onSubmit={(e) => submitHandler(e)}>
            <h3 className="text-lg font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </div>

        <div>
          <p className="text-[10px] leading-tight">
            By proceeding, you agree to Uber's Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
