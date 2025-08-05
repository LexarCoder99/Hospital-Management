import React from "react";
import Card from "./Card"; // adjust path if needed

import {
  BrainTherapy,
  cardiology,
  DentalCare,
  Emergency_Trauma,
  gynecology,
  MiniOperation,
  neurologist,
  ophthalmologist,
  PathriOperation,
  Pediatrics,
  Physiotherapy_Rehab,
  PregnancyCare,
  SexualHealth,
} from "../../assets/Tritment/Export";


const treatmentData = [
  {
    id: 1, // Added unique id for key prop
    title: "Pregnancy Care",
    image: PregnancyCare,
    doctor: "Dr. Gunjan Mishra",
    timing: "9:00 AM - 2:00 PM",
  },
  {
    id: 2,
    title: "Neurology",
    image: neurologist,
    doctor: "Dr. A.K. Mehra",
    timing: "10:00 AM - 1:00 PM",
  },
  {
    id: 3,
    title: "Ophthalmology",
    image: ophthalmologist,
    doctor: "Dr. Reena Shah",
    timing: "11:00 AM - 3:00 PM",
  },
  {
    id: 4,
    title: "Dental Care",
    image: DentalCare,
    doctor: "Dr. Ajay Mathur",
    timing: "10:00 AM - 4:00 PM",
  },
  {
    id: 5,
    title: "Emergency & Trauma",
    image: Emergency_Trauma,
    doctor: "Dr. Vivek Thakur",
    timing: "24/7 Emergency",
  },
  {
    id: 6,
    title: "Cardiology",
    image: cardiology,
    doctor: "Dr. Neha Chaudhary",
    timing: "9:30 AM - 5:00 PM",
  },
  {
    id: 7,
    title: "Sexual Health",
    image: SexualHealth,
    doctor: "Dr. Varun Tiwari",
    timing: "12:00 PM - 6:00 PM",
  },
  {
    id: 8,
    title: "Gynecology",
    image: gynecology,
    doctor: "Dr. Meenakshi Chauhan",
    timing: "10:00 AM - 3:00 PM",
  },
  {
    id: 9,
    title: "Pediatrics",
    image: Pediatrics,
    doctor: "Dr. Anjali Saxena",
    timing: "9:00 AM - 1:00 PM",
  },
  {
    id: 10,
    title: "Pathri Operation",
    image: PathriOperation,
    doctor: "Dr. Manish Rawat",
    timing: "11:00 AM - 5:00 PM",
  },
  {
    id: 11,
    title: "Mini Operation",
    image: MiniOperation,
    doctor: "Dr. Harshita Rana",
    timing: "10:00 AM - 4:00 PM",
  },
  {
    id: 12,
    title: "Brain Therapy",
    image: BrainTherapy,
    doctor: "Dr. Kunal Sethi",
    timing: "9:30 AM - 2:30 PM",
  },
  {
    id: 13,
    title: "Physiotherapy & Rehab",
    image: Physiotherapy_Rehab,
    doctor: "Dr. Radhika Kapoor",
    timing: "11:00 AM - 6:00 PM",
  },
];

const Tritment = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6 bg-[#d7d6d6]">
      {treatmentData.map((item) => (
        <Card
          key={item.id} // Using unique 'id' instead of index
          title={item.title}
          image={item.image}
          doctor={item.doctor}
          timing={item.timing}
        />
      ))}
    </div>
  );
};

export default Tritment;
