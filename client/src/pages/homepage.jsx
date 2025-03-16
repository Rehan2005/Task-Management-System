import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f3f4f6] text-center p-10">
      <h1 className="text-5xl font-bold text-blue-700">Welcome to TaskMate</h1>
      <p className="text-lg text-gray-600 mt-4">
        Manage all your tasks efficiently in one place!
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          to="/log-in"
          className="px-6 py-2 bg-blue-700 text-white rounded-full text-lg"
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-2 border border-blue-700 text-blue-700 rounded-full text-lg"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
