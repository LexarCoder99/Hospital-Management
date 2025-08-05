import { motion } from "framer-motion";
import { useState } from "react";
import BigAmbulance from "../../assets/Ambulance/vipambu.webp";
import smallAmbulance from "../../assets/Ambulance/smallAmbulance.webp";

const ambulanceTypes = [
  {
    name: "Standard Ambulance",
    pricePerKm: 10,
    contact: "123-456-7890",
    description: "A basic ambulance for all emergency needs.",
    imgSrc: smallAmbulance,
  },
  {
    name: "VIP Ambulance",
    pricePerKm: 20,
    contact: "987-654-3210",
    description: "A premium ambulance with top-notch facilities.",
    imgSrc: BigAmbulance,
  },
];

export default function CartPage() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (contact) => {
    navigator.clipboard.writeText(contact);
    setCopied(contact);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 via-gray-100 to-gray-200 min-h-screen py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Ambulance Services
        </h1>
        <p className="text-md text-gray-600">
          Choose the best ride for your emergency
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="w-full flex flex-wrap gap-8 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {ambulanceTypes.map((ambulance, index) => (
          <motion.div
            key={ambulance.name}
            className="bg-white w-80 shadow-lg rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={ambulance.imgSrc}
              alt={ambulance.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {ambulance.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              {ambulance.description}
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Cost:{" "}
              <span className="text-blue-700 font-bold">
                ₹{ambulance.pricePerKm}/KM
              </span>
            </p>
            <div className="text-sm text-gray-700 mb-2">
              Contact:{" "}
              <span
                className="text-blue-600 font-medium cursor-pointer underline"
                onClick={() => handleCopy(ambulance.contact)}
              >
                {ambulance.contact}
              </span>
              {copied === ambulance.contact && (
                <span className="ml-2 text-green-500 font-semibold">
                  Copied!
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
