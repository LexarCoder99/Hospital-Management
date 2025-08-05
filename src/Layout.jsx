import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "./Components/Export"; // Import your header and footer

// Layout component to wrap page contents
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* Scroll Restoration for better navigation experience */}
        <ScrollRestoration />

        {/* The page content will be dynamically inserted here */}
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Layout;
