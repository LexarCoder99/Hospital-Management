import React, { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout"; // Import Layout
import "./index.css"; // Import global styles
import Loader from "./Components/Loader/Loader"; // Import the loader component

// Lazy loading page components for better performance
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Services = lazy(() => import("./Components/Services/Services"));
const Appointment = lazy(() => import("./Components/Appointment/Appointment"));
const Ambulance = lazy(() => import("./Components/Ambulance/Ambulance"));
const Doctor = lazy(() => import("./Components/Doctors/Doctor"));
const Tritment = lazy(() => import("./Components/Tritment/Tritment"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Chat = lazy(() => import("./Components/Chats/Chats"));

// Router definition with lazy loading for each route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="ambulance" element={<Ambulance />} />
      <Route path="doctor" element={<Doctor />} />
      <Route path="tritment" element={<Tritment />} />
      <Route path="contact" element={<Contact />} />
      <Route path="chat" element={<Chat />} />
    </Route>
  )
);

// Render the app with error handling and smooth loading
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
