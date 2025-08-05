import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// Data for available treatments and their corresponding restrictions
const treatmentRestrictions = {
  "Pregnancy Care": {
    restricted: (age, gender) => gender !== "Female" || age < 20,
    ineligibleMessage:
      "Pregnancy Care is typically for adult females (20+). You may not be eligible. Please consult directly with a doctor.",
  },
  "Sexual Health (Andrology / Sexology)": {
    restricted: (age, gender) => gender !== "Male" || age < 20,
    ineligibleMessage:
      "Sexual Health (Andrology / Sexology) is typically for adult males (20+). You may not be eligible. Please consult directly with a doctor.",
  },
  Gynecology: {
    restricted: (age, gender) => gender !== "Female",
    ineligibleMessage:
      "Gynecology is for women's reproductive health. You may not be eligible. Please consult directly with a doctor.",
  },
};

// Data for available treatments and their corresponding doctors
const treatmentData = {
  "Pregnancy Care": {
    doctor: "Dr. Gunjan Mishra",
    specialization: "Maternity / Pregnancy Specialist",
  },
  Neurology: {
    doctor: "Dr. A.K. Mehra",
    specialization: "Brain & Nervous System",
  },
  Ophthalmology: {
    doctor: "Dr. Reena Shah",
    specialization: "Eye Specialist",
  },
  "Dental Care": {
    doctor: "Dr. Ajay Mathur",
    specialization: "Dentist",
  },
  "Emergency & Trauma": {
    doctor: "Dr. Vivek Thakur",
    specialization: "Emergency Medicine",
  },
  Cardiology: {
    doctor: "Dr. Neha Chaudhary",
    specialization: "Heart Specialist",
  },
  "Sexual Health (Andrology / Sexology)": {
    doctor: "Dr. Varun Tiwari",
    specialization: "Sexual Wellness & Reproductive Health",
  },
  Gynecology: {
    doctor: "Dr. Meenakshi Chauhan",
    specialization: "Women’s Health Specialist",
  },
  Pediatrics: {
    doctor: "Dr. Anjali Saxena",
    specialization: "Child Specialist",
    restricted: (age) => age >= 18,
    ineligibleMessage:
      "Pediatrics is for children. For adult care, please select a different treatment.",
  },
  "Pathri Operation": {
    doctor: "Dr. Manish Rawat",
    specialization: "Urologist (Kidney Stone Surgery)",
  },
  "Mini Operation": {
    doctor: "Dr. Harshita Rana",
    specialization: "General Surgeon",
  },
  "Brain Therapy": {
    doctor: "Dr. Kunal Sethi",
    specialization: "Neurotherapy Specialist",
  },
  "Physiotherapy & Rehab": {
    doctor: "Dr. Radhika Kapoor",
    specialization: "Physical Recovery & Rehabilitation",
  },
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    treatment: "",
    paymentMethod: "",
    paymentDetails: "",
  });
  const [isPaid, setIsPaid] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isPaymentSectionVisible, setIsPaymentSectionVisible] = useState(false);
  const [ineligibleTreatmentMessage, setIneligibleTreatmentMessage] =
    useState("");
  const [canProceedWithBooking, setCanProceedWithBooking] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim whitespace from input
    }));
    setIneligibleTreatmentMessage(""); // Clear ineligible message on input change
    setCanProceedWithBooking(false); // Reset proceed state on input change

    if (name === "paymentDetails") {
      setPaymentError("");
    }

    // Automatically check eligibility and show/hide payment section
    const isBasicInfoFilled =
      formData.name &&
      (name === "age" ? value > 0 && value <= 100 : formData.age) &&
      formData.gender &&
      (name === "treatment" ? value !== "" : formData.treatment);

    if (isBasicInfoFilled && formData.treatment) {
      const restriction = treatmentRestrictions[formData.treatment];
      const isRestricted = restriction?.restricted(
        parseInt(formData.age),
        formData.gender
      );
      if (!isRestricted) {
        setIsPaymentSectionVisible(true);
        setCanProceedWithBooking(true);
      } else {
        setIsPaymentSectionVisible(false);
        setCanProceedWithBooking(false);
        setIneligibleTreatmentMessage(restriction.ineligibleMessage);
      }
    } else {
      setIsPaymentSectionVisible(false);
      setCanProceedWithBooking(false);
    }
  };

  const selectedTreatmentInfo = treatmentData[formData.treatment];

  const isBasicInfoComplete =
    formData.name &&
    formData.age > 0 &&
    formData.age <= 100 &&
    formData.gender &&
    formData.treatment;

  useEffect(() => {
    if (formData.treatment && isBasicInfoComplete) {
      const restriction = treatmentRestrictions[formData.treatment];
      const isRestricted = restriction?.restricted(
        parseInt(formData.age),
        formData.gender
      );
      if (isRestricted) {
        setIneligibleTreatmentMessage(restriction.ineligibleMessage);
        setIsPaymentSectionVisible(false);
        setCanProceedWithBooking(false);
      } else {
        setIneligibleTreatmentMessage("");
        setIsPaymentSectionVisible(true);
        setCanProceedWithBooking(true);
      }
    } else {
      setIneligibleTreatmentMessage("");
      setIsPaymentSectionVisible(false);
      setCanProceedWithBooking(false);
    }
  }, [formData.age, formData.gender, formData.treatment, isBasicInfoComplete]);

  const validatePaymentForm = () => {
    const { paymentMethod, paymentDetails } = formData;

    if (!paymentMethod && isPaymentSectionVisible) {
      setPaymentError("Please select a payment method.");
      return false;
    }

    if (!paymentDetails && isPaymentSectionVisible) {
      setPaymentError(
        `Please enter your ${
          paymentMethod === "Debit Card"
            ? "card number"
            : "UPI ID / phone number"
        }.`
      );
      return false;
    }

    if (paymentMethod === "UPI" && !/^[a-zA-Z0-9@.-]+$/.test(paymentDetails)) {
      setPaymentError(
        "Please enter a valid UPI ID (alphanumeric, @, ., - allowed)."
      );
      return false;
    }

    if (
      (paymentMethod === "PhonePe" ||
        paymentMethod === "Google Pay" ||
        paymentMethod === "Paytm") &&
      !/^\d{10}$/.test(paymentDetails)
    ) {
      setPaymentError("Phone number must be exactly 10 digits.");
      return false;
    }

    if (paymentMethod === "Debit Card" && !/^\d{16}$/.test(paymentDetails)) {
      setPaymentError("Please enter a valid 16-digit debit card number.");
      return false;
    }

    setPaymentError("");
    return true;
  };

  const handlePayment = () => {
    if (isBasicInfoComplete && canProceedWithBooking) {
      if (isPaymentSectionVisible && validatePaymentForm()) {
        alert("Payment Successful!");
        setIsPaid(true);
      }
    } else if (ineligibleTreatmentMessage) {
      setError(ineligibleTreatmentMessage);
      setTimeout(() => setError(""), 3000);
    } else {
      setError(
        "Please fill in all the basic information (Name, Age, Gender, Treatment) correctly."
      );
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleBook = () => {
    if (isPaid && canProceedWithBooking) {
      alert("Your Appointment is Confirmed!");
      setIsBooked(true);
      setFormData({
        name: "",
        age: "",
        gender: "",
        treatment: "",
        paymentMethod: "",
        paymentDetails: "",
      });
      setIsPaid(false);
      setIsPaymentSectionVisible(false);
      setCanProceedWithBooking(false);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else if (ineligibleTreatmentMessage) {
      alert(ineligibleTreatmentMessage);
    } else {
      alert(
        "Please complete the payment and ensure eligibility before booking."
      );
    }
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className=" page w-full max-w-md md:max-w-lg lg:max-w-3xl bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200">
        <h4 className="tittle text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700">
          Book Your Doctor Appointment
        </h4>

        {/* Basic Information Form */}
        <div className=" grid sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
            min="1"
            max="100"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
            required
          >
            <option value="">Select Treatment</option>
            {Object.keys(treatmentData).map((treat, idx) => (
              <option key={idx} value={treat}>
                {treat}
              </option>
            ))}
          </select>
        </div>

        {ineligibleTreatmentMessage && (
          <div className="p-4 mt-2 mb-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md">
            <p className="text-yellow-700 font-medium text-sm">⚠️ Important:</p>
            <p className="text-yellow-600 mt-1 text-sm">
              {ineligibleTreatmentMessage}
            </p>
            <p className="text-yellow-600 mt-2 text-sm">
              Please consult directly with a doctor for this treatment.
            </p>
          </div>
        )}

        {selectedTreatmentInfo && !ineligibleTreatmentMessage && (
          <div className="p-4 mt-2 mb-4 bg-indigo-50 border-l-4 border-[#6366f1] rounded-md">
            <p className="text-gray-800 font-medium text-sm">
              👨‍⚕️ Doctor:{" "}
              <span className="text-indigo-600">
                {selectedTreatmentInfo.doctor}
              </span>
            </p>
            <p className="text-gray-700 mt-1 text-sm">
              📌 Specialization: {selectedTreatmentInfo.specialization}
            </p>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        {isPaymentSectionVisible && canProceedWithBooking && (
          <div className="mt-6 bg-gray-50 border border-dashed border-gray-300 p-4 rounded-lg">
            <h4 className="font-semibold text-base mb-3 text-gray-700">
              Payment Information
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Appointment Charges:{" "}
              <span className="font-semibold text-black">₹200</span>
            </p>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="PhonePe">PhonePe</option>
              <option value="Google Pay">Google Pay</option>
              <option value="Paytm">Paytm</option>
              <option value="UPI">UPI</option>
              <option value="Debit Card">Debit Card</option>
            </select>

            {formData.paymentMethod && (
              <input
                type="text"
                name="paymentDetails"
                placeholder={
                  formData.paymentMethod === "Debit Card"
                    ? "Enter Card Number (16 digits)"
                    : "Enter UPI ID / Phone Number (10 digits)"
                }
                value={formData.paymentDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-sm"
                required
              />
            )}

            {paymentError && (
              <p className="text-red-500 text-sm mt-2">{paymentError}</p>
            )}

            <button
              onClick={handlePayment}
              disabled={
                !isBasicInfoComplete || isPaid || !canProceedWithBooking
              }
              className={`mt-4 w-full text-white py-2 rounded-lg font-semibold text-sm transition ${
                !isBasicInfoComplete || isPaid || !canProceedWithBooking
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              }`}
            >
              Pay ₹200
            </button>
          </div>
        )}

        {isPaid && canProceedWithBooking && (
          <div className="mt-4 text-center text-green-600 font-medium text-sm">
            ✅ Payment Successful
          </div>
        )}

        {isPaid && !isBooked && canProceedWithBooking && (
          <button
            onClick={handleBook}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-sm transition focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
          >
            Book Appointment
          </button>
        )}

        {isBooked && (
          <div className="mt-4 text-center text-green-700 font-semibold text-sm">
            ✅ Appointment Booked Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
