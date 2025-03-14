import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80')",
        }}
      >
        <div className="pt-6 pl-6">
          <h1 className="text-3xl font-bold text-white">Uber</h1>
        </div>
      </div>
      <div
        className="bg-white p-6 rounded-t-lg shadow-lg"
        style={{ marginTop: "-20px" }}
      >
        <h2 className="text-3xl font-bold mb-4">Get Started with Uber</h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 font-medium rounded"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
