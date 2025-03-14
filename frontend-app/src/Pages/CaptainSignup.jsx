import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plates: vehiclePlate, 
        capacity: vehicleCapacity,
        vehicleType: vehicleType, 
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
      }
      navigate("/captain-home");

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Uber</h1>
        <span className="ml-1">→</span>
      </div>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block font-medium mb-2">
            What's our Captain's name
          </label>
          <div className="flex gap-2 mb-4">
            <input
              required
              className="bg-gray-100 rounded p-2 w-1/2 text-sm"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-gray-100 rounded p-2 w-1/2 text-sm"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            What's our Captain's email
          </label>
          <input
            required
            className="bg-gray-100 rounded p-2 w-full text-sm"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Enter Password</label>
          <input
            required
            className="bg-gray-100 rounded p-2 w-full text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Vehicle Information</label>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <input
              required
              className="bg-gray-100 rounded p-2 text-sm"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-gray-100 rounded p-2 text-sm"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              required
              className="bg-gray-100 rounded p-2 text-sm"
              type="text"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-gray-100 rounded p-2 text-sm"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="auto">Auto</option>
              <option value="Cab">Cab</option>
              <option value="van">Van</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
        </div>

        <button
          className="bg-black text-white font-medium rounded p-2 w-full mb-3"
          type="submit"
        >
          Create Captain Account
        </button>

        <p className="text-center mb-4 text-sm">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>

        <div className="text-xs text-gray-500 mt-4">
          This site is protected by reCAPTCHA and the{" "}
          <a href="#" className="text-gray-500 underline">
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-500 underline">
            Terms of Service
          </a>{" "}
          apply.
        </div>
      </form>
    </div>
  );
};

export default CaptainSignup;
