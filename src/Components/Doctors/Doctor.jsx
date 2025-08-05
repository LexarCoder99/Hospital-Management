import { useEffect, useRef, useState, useMemo } from "react";
import doctorData from "./DoctorData";
import { useNavigate } from "react-router-dom";

const Doctor = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(doctorData.length / 2)
  );
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(260);

  // Memoize the calculations to avoid recomputing on every render
  const maxVisibleCards = useMemo(() => {
    return Math.floor(sliderWidth / (cardWidth * 0.7)) / 2 + 1;
  }, [sliderWidth, cardWidth]);

  useEffect(() => {
    const handleResize = () => {
      const width = sliderRef.current.offsetWidth;
      setSliderWidth(width);
      setCardWidth(width < 640 ? 160 : width < 1024 ? 220 : 260);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate X position based on index
  const calculateX = (index) => {
    const diff = index - activeIndex;
    return diff * (cardWidth * 0.4);
  };

  // Calculate scale based on index
  const calculateScale = (index) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return 1.2;
    return 1 - distance * 0.07;
  };

  const getStyle = (index) => {
    const x = calculateX(index);
    const scale = calculateScale(index);
    const zIndex = 1000 - Math.abs(index - activeIndex);

    // Only show cards that are close enough to the active card
    if (Math.abs(index - activeIndex) > maxVisibleCards) {
      return { display: "none" };
    }

    return {
      transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
      zIndex,
      position: "absolute",
      left: "50%",
      top: "50%",
      transition: "all 0.5s ease-in-out",
      cursor: "pointer",
      width: `${cardWidth}px`,
      height: `${cardWidth * 1.6}px`,
      borderRadius: "1rem",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      backgroundColor: "#fff",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transformOrigin: "center",
    };
  };

  return (
    <div className="w-full min-h-screen bg-[#bac4c9] flex flex-col items-center overflow-hidden pb-10">
      {/* Top Heading */}
      <h3 className="text-3xl sm:text-5xl font-bold text-center text-[#0077C8] drop-shadow-md tracking-wide main-heading">
        Our Doctors
      </h3>

      {/* Slider Section */}
      <div
        ref={sliderRef}
        className="page relative w-full max-w-[1200px] flex justify-center items-center flex-1"
      >
        {doctorData.map((doc, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={getStyle(i)}
            className="transition-transform hover:scale-105"
          >
            {/* Image */}
            <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-t-2xl">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="text-center p-2">
              <h3
                className={`font-semibold heading ${
                  cardWidth > 220
                    ? "text-lg"
                    : cardWidth > 160
                    ? "text-sm"
                    : "text-xs"
                }`}
              >
                {doc.name}
              </h3>
              <p
                className={`text-gray-600 ${
                  cardWidth > 220
                    ? "text-base"
                    : cardWidth > 160
                    ? "text-sm"
                    : "text-xs"
                }`}
              >
                {doc.specialization}
              </p>
              <p
                className={`text-gray-500 ${
                  cardWidth > 220
                    ? "text-sm"
                    : cardWidth > 160
                    ? "text-xs"
                    : "text-[10px]"
                }`}
              >
                {doc.experience} Years Experience
              </p>

              {/* Button */}
              <button
                onClick={() => navigate("/appointment")}
                className={`mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full shadow-md transition ${
                  cardWidth > 220
                    ? "text-sm"
                    : cardWidth > 160
                    ? "text-xs"
                    : "text-[7px]"
                }`}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
