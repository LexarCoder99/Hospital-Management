import React from "react";
import { motion } from "framer-motion";
import Hospital from "../../assets/About/Hospital.webp"; // Ensure path is correct

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-5 md:px-20 text-gray-800">
      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-800 mb-10"
      >
        About Veda Arogya
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-10 mb-12"
      >
        <div className="md:w-1/2">
          <img
            src={Hospital}
            alt="Veda Arogya Hospital Building"
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg leading-loose tracking-wide">
            Veda Arogya is a trusted multi-specialty healthcare institution
            located in Daurala, Meerut (U.P.). Since its inception, it has been
            dedicated to offering affordable, compassionate, and top-class
            medical services. Our team of experienced specialists and
            state-of-the-art facilities make us a one-stop solution for a wide
            range of treatments.
          </p>
        </div>
      </motion.div>

      {/* Chairman Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md rounded-xl p-6 mb-10"
      >
        <h4 className="text-2xl font-semibold text-blue-700 mb-3">
          Message from Chairman
        </h4>
        <p className="text-base leading-relaxed">
          "Our vision is to provide world-class treatment with a patient-first
          mindset. We believe in compassion, integrity, and continuous
          innovation to deliver better health outcomes for everyone."
        </p>
        <p className="mt-4 font-medium text-gray-700">
          - Dr. Nitesh Pandey (Chairman)
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2 text-center md:text-left">
            Our Mission
          </h4>
          <p>
            To offer ethical and exceptional healthcare services, with a focus
            on accessibility, innovation, and patient comfort.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold text-blue-600 mb-2 text-center md:text-left">
            Our Vision
          </h4>
          <p>
            To become a regional leader in modern and affordable healthcare by
            2030.
          </p>
        </div>
      </motion.div>

      {/* Hospital Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h4 className="text-2xl font-bold text-blue-700 mb-5">
          Hospital Highlights
        </h4>
        <ul className="space-y-2 text-base">
          <li>
            <strong>🏥 Established:</strong> 2010
          </li>
          <li>
            <strong>📍 Location:</strong> NH-58, Daurala, Meerut, Uttar Pradesh
          </li>
          <li>
            <strong>🛏️ Beds:</strong> 30 Total, 10 ICU Beds
          </li>
          <li>
            <strong>👨‍⚕️ Doctors:</strong> 15+ Experienced Specialists
          </li>
          <li>
            <strong>📞 Contact:</strong> +91-7055218361 / +91-7055218362
          </li>
        </ul>
      </motion.div>

      {/* Treatments */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h4 className="text-2xl font-bold text-blue-700 mb-5">
          Our Treatments
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Gastroenterology",
            "Pulmonology",
            "Liver Disease Treatment",
            "Endoscopy & Colonoscopy",
            "Cancer Care",
            "General & Laparoscopic Surgery",
            "Diabetes & Heart Care",
            "Kidney & Urinary Disorders",
            "Lung Function Testing (PFT)",
          ].map((treatment, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-base font-medium text-gray-700">{treatment}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-md mb-12"
      >
        <h4 className="text-2xl font-bold text-blue-700 mb-4">
          Why Choose Veda Arogya?
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li>24x7 emergency & ambulance services</li>
          <li>Modern diagnostic labs with CT, USG, X-Ray</li>
          <li>Skilled team of senior doctors</li>
          <li>Hygienic ICU and patient rooms</li>
          <li>Affordable and transparent billing</li>
        </ul>
        <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </motion.div>

      {/* Patient Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h4 className="text-2xl font-bold text-blue-700 mb-5 text-center">
          What Our Patients Say
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Priyanshu Mishra",
              review:
                "The doctors and staff were incredibly supportive. My father's treatment for liver issues was handled professionally and with care.",
            },
            {
              name: "Rohit Singh",
              review:
                "Excellent facilities and hygiene. We were treated with dignity and all procedures were explained in detail.",
            },
            {
              name: "Preeti Chauhan",
              review:
                "Affordable yet top-quality services. Their Gastro department is especially good. Highly recommend Veda Arogya!",
            },
          ].map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg text-center"
            >
              <p className="text-sm text-gray-600 italic">"{user.review}"</p>
              <p className="mt-3 text-sm font-semibold text-blue-800">
                - {user.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
