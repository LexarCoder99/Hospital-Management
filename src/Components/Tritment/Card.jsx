import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, doctor, timing, route }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (route) {
      navigate(route); // Dynamically navigate based on the passed route
    }
  };

  return (
    <div className="w-80 rounded-xl overflow-hidden shadow-lg border p-4 card hover:scale-105 transition-transform duration-500">
      <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden mb-3">
        {image && (
          <img
            src={image}
            alt={`${title} treatment by Dr. ${doctor}`} // Improved SEO-friendly alt text
            loading="lazy" // ✅ Lazy load for performance
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-1">👨‍⚕️ {doctor}</p>
      <p className="text-sm text-gray-500 mb-3">⏱ {timing}</p>

      <button
        className="btn btnHover borderFocuse w-full rounded-lg py-2 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
        onClick={handleButtonClick} // Dynamic route handling
      >
        Appointment
      </button>
    </div>
  );
};

export default Card;
