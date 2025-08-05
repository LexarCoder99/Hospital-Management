import React from "react";
import { NavLink } from "react-router-dom";
import hospitalLogo from "../../assets/Logos/HospitalLogo.webp";

function Footer() {
  const navLinkStyles = ({ isActive }) =>
    `link font-medium LinkUnderline text-black ${
      isActive ? "font-bold" : "hover:text-red-500"
    }`;

  return (
    <footer className="background pt-16 pb-8 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src={hospitalLogo}
            alt="Hospital Logo"
            loading="lazy"
            className="w-28 mb-4"
          />
          <p className="text-sm para">
            Healing Touch Hospital is committed to providing the highest quality
            medical care with compassion, integrity, and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className={navLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkStyles}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" className={navLinkStyles}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Departments</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/departments/cardiology" className={navLinkStyles}>
                Cardiology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/neurology" className={navLinkStyles}>
                Neurology
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/orthopedics" className={navLinkStyles}>
                Orthopedics
              </NavLink>
            </li>
            <li>
              <NavLink to="/departments/pediatrics" className={navLinkStyles}>
                Pediatrics
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Emergency Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Emergency Info</h3>
          <p className="text-sm mb-2">24/7 Emergency Services Available</p>
          <p className="text-lg font-bold">+91 98765 *****</p>
          <p className="text-sm mt-4">
            Address: 123 Healing Street, Dehradun, Uttarakhand
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Bar */}
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Healing Touch Hospital. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;

