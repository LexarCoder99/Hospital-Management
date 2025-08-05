import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navlogo from "../../assets/Logos/nav.webp";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navlinks = ({ isActive }) =>
    `link LinkUnderline text-lg font-medium ${
      isActive ? "LinkActive " : "link"
    }`;

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/doctor", label: "Doctors" },
    { to: "/tritment", label: "Tritment" },
  ];

  // 🖥️ Desktop animation
  const desktopVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const desktopItem = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  // 📱 Mobile animation
  const mobileContainer = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const mobileItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <header className="w-full h-auto background relative">
        <div className="w-full h-auto px-10 py-5 flex justify-between items-center">
          <NavLink to="/" className="w-11">
            <img
              src={navlogo}
              className="object-cover rounded-lg"
              alt="Veda Arogya Healthcare Logo"
            />
          </NavLink>

          {/* 🖥️ Desktop Nav */}
          <motion.nav
            variants={desktopVariants}
            initial="hidden"
            animate="show"
            className="lg:w-2/4 md:w-10/12 hidden md:flex justify-evenly items-center"
          >
            {links.map((link, i) => (
              <motion.div key={i} variants={desktopItem}>
                <NavLink to={link.to} className={navlinks}>
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          {/* ☰ Button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl text-[#0077C8] transition-all duration-300"
          >
            <span className="text-[#0077C8]">{isOpen ? "🗙" : "☰"}</span>
          </button>
        </div>

        {/* 📱 Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileContainer}
              className="md:hidden w-full absolute top-full z-50 backdrop-blur-lg bg-white flex flex-col items-center h-screen"
            >
              {links.map((link, i) => (
                <motion.div key={i} variants={mobileItem} className="my-2">
                  <NavLink
                    to={link.to}
                    className={navlinks}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
