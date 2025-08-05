import React from "react";
import { useNavigate } from "react-router-dom";
import { Tritment, Doctor, Services, Contact } from "../Export";
import Wave from "./Wave";
import { FaCalendarCheck, FaAmbulance } from "react-icons/fa";
import Homeimg from "../../assets/Logos/Home.webp";
import Homeimg2 from "../../assets/Logos/Home2.webp";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Main Wrapper */}
      <div className="relative w-full min-h-screen text-center overflow-x-hidden">
        {/* Left Image Section */}
        <div className="relative hidden sm:flex md:absolute lg:top-0 left-0 lg:w-[320px] sm:w-[280px] md:w-[280px] h-[240px] sm:h-[260px] md:h-[300px] rounded-br-[150px] rounded-tr-[150px] z-10 items-center justify-center mainbg">
          <div className="relative w-[160px] sm:w-[180px] md:w-[200px] h-[160px] sm:h-[180px] md:h-[200px] rounded-full border-8 border-white overflow-hidden">
            <img
              loading="lazy"
              src={Homeimg}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col space-y-4 z-20">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-white"></span>
            ))}
          </div>

          {/* Medical Company Badge */}
          <div className="absolute top-3 left-5 flex items-center space-x-2 z-20">
            <svg
              className="w-6 h-6 text-white "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 4.97-4.03 9-9 9z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7v6m3-3H9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white text-xs font-semibold tracking-wide">
              MEDICAL COMPANY
            </span>
          </div>

          {/* Top Right Plus Sign */}
          <div className="absolute top-6 right-2 text-[#0077C8] text-4xl font-extrabold select-none z-20 leading-none">
            +
          </div>
        </div>

        {/* Hero Section */}
        <div className="page relative w-full sm:w-full h-auto min-h-[90vh] px-4 py-16 sm:py-20 flex flex-col justify-center items-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl sm:mb-3 text-[#0077C8] font-semibold">
            HEALTH
          </h1>
          <h2 className="sm:mb-3 text-4xl sm:text-5xl lg:text-6xl text-[#00a0c8] font-semibold">
            PROFESSIONALS
          </h2>
          <p className="max-w-96 lg:max-w-96 text-base lg:text-lg">
            We provide top-notch healthcare services. Book your appointment or
            get an ambulance instantly.
          </p>

          {/* Action Buttons */}
          <div className="w-full py-6 flex flex-col sm:flex-row sm:justify-center items-center gap-4">
            <button
              onClick={() => navigate("/appointment")}
              className="btn btnHover borderFocus w-full sm:w-auto text-white text-sm font-semibold px-6 py-2 rounded-full flex items-center justify-center gap-2"
            >
              <FaCalendarCheck className="text-lg" />
              Book Appointment
            </button>
            <button
              onClick={() => navigate("/ambulance")}
              className="btn btnHover borderFocus border w-full sm:w-auto border-[#0077c8] text-sm font-semibold px-6 py-2 rounded-full flex items-center justify-center gap-2"
            >
              <FaAmbulance className="text-lg" />
              Call Ambulance
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex absolute bottom-0 right-0 w-[320px] h-[320px] nav rounded-tl-[150px] rounded-bl-[150px] z-10 items-center justify-center mainbg">
          <div className="relative w-[220px] h-[220px] rounded-full border-8 border-white overflow-hidden">
            <img
              loading="lazy"
              src={Homeimg2}
              alt="Doctor Bottom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-4 z-20">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-white"></span>
            ))}
          </div>

          {/* Bottom Right Plus Sign */}
          <div className="absolute bottom-6 right-6 text-white text-4xl font-extrabold select-none z-20 leading-none">
            +
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute hidden md:flex bottom-12 left-12 text-[#0077C8] text-4xl font-extrabold z-10">
          +
        </div>
        <div className="absolute bottom-20 right-20 text-[#0077C8] lg:text-white text-2xl font-extrabold z-10">
          +
        </div>
        <div className="hidden md:grid absolute top-20 right-20 grid-cols-3 grid-rows-3 gap-1 z-10">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 nav rounded-full"></span>
          ))}
        </div>

        {/* Wave Component */}
        <Wave />

        {/* Fixed Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => navigate("/chat")}
            className="bg-[#0077C8] hover:bg-[#005fa3] text-white px-4 py-3 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2"
          >
            💬 Chat with Us
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <Tritment />
      <Services />
      <Doctor />
      <Contact />
    </>
  );
}

export default Home;
