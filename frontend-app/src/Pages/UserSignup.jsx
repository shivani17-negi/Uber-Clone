import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
 const [user, setUser] = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

 try {
   const response = await axios.post(
     `${import.meta.env.VITE_BASE_URL}/users/register`,
     newUser
   );

     localStorage.setItem("token", response.data.token);
     setUser(response.data.user);
    navigate("/home");
   // Success handling
 } catch (error) {
   // Display the error message from the backend
   console.error(
     "Registration failed:",
     error.response?.data?.message || error.message
   );
   // Optionally, show the error to the user
   alert(
     error.response?.data?.message || "Registration failed. Please try again."
   );
 }

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
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
              type="submit"
            >
              Create New Account
            </button>
          </form>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
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
