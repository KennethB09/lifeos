import React from "react";

const StartupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-6 w-80 text-center shadow-xl">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Life<span className="text-blue-500">OS</span>
        </div>

        {/* Illustration */}
        <div className="my-6">
          <img
            src="/brain.png"
            alt="Brain Character"
            className="w-36 mx-auto"
          />
        </div>

        {/* Title & Description */}
        <h2 className="text-lg font-semibold text-gray-800">
          Explore the Power of Your Mind 🧠🚀😎
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Track your focus, balance your emotions, and improve your mental
          stability effectively.
        </p>

        {/* Single Button */}
        <div className="mt-6">
          <button className="w-full py-3 rounded-full bg-blue-400 text-white font-semibold shadow hover:bg-blue-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartupPage;
