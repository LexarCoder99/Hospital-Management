import React from "react";
import baeds from "../../assets/Services/bed.webp";
import icu from "../../assets/Services/ICU.webp";
import ambulance from "../../assets/Services/ambulance.webp";
import medical from "../../assets/Services/Medical.webp";
import nurse from "../../assets/Services/Nurse.webp";
import mri from "../../assets/Services/MRI.webp";

const services = [
  {
    title: "General Beds",
    status: "30 Beds Available",
    image: baeds,
    description:
      "Basic bed facility for admitted patients, equipped with fan, light, and nurse call.",
    altText: "General Beds available with basic facilities.",
  },
  {
    title: "Ambulance Service",
    status: "4 Ambulances Active",
    image: ambulance,
    description:
      "24/7 emergency ambulance service with trained staff and real-time tracking.",
    altText: "24/7 Ambulance Service with trained staff.",
  },
  {
    title: "Nursing Assistance",
    status: "12 Nurses On-Duty",
    image: nurse,
    description:
      "Round-the-clock care and support by professionally trained nurses.",
    altText: "Nursing Assistance available 24/7.",
  },
  {
    title: "ICU (Intensive Care Unit)",
    status: "10 Beds Available",
    image: icu,
    description:
      "Life support system equipped ICU for critical patients with expert supervision.",
    altText: "ICU with life support for critical patients.",
  },
  {
    title: "MRI Scan",
    status: "No Waiting | 2 Machines Operational",
    image: mri,
    description:
      "High-resolution MRI scanning for accurate internal diagnostics.",
    altText: "MRI scanning with high-resolution machines.",
  },
  {
    title: "Pharmacy",
    status: "Open 24/7",
    image: medical,
    description:
      "Well-stocked pharmacy with all essential medicines, available round the clock.",
    altText: "24/7 pharmacy with essential medicines.",
  },
];

const Services = () => {
  return (
    <div className="py-10 px-4 bg-[#c5cfd3] min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 main-heading">
        🏥 Our Hospital Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="page backdrop-blur-lg bg-white/30 shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group border border-white/40"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={service.image}
                alt={service.altText}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                // Instead of scale-110, we use scale-105 for smoother transitions
              />
              <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full text-green-600 font-semibold shadow-md">
                {service.status}
              </div>
            </div>
            <div className="p-5">
              <h3 className="tittle text-xl font-bold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
