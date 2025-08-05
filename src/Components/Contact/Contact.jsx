import React, { useState } from "react";
import contactlogos from "../../assets/Logos/contactlogos.webp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    setFormError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setFormError(null);

    // Simulate an API request (Replace with your API call)
    setTimeout(() => {
      setLoading(false);
      setFormSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-[#cdcfcf] py-16 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start space-y-6 ">
          <h3 className="text-4xl font-extrabold leading-tight tittle">
            We're Here to Help You
          </h3>
          <h3 className="text-l">
            Have questions or need assistance? Our team is available to guide
            you. Reach out to us via the form below, and we’ll get back to you
            as soon as possible.
          </h3>
          <div className="para">
            Prefer not to use the form? You can always
            <span className="underline text-indigo-600  cursor-pointer pl-1 pr-1">
              email us directly
            </span>
            , and we’ll respond promptly.
          </div>

          {/* SVG Logo */}
          <div className="mt-6 text-center">
            <img
              className="w-2/3 md:w-1/2 "
              src={contactlogos}
              alt="contact Logo"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full page">
          <h3 className="text-2xl font-bold text-gray-800">
            Send Us a Message
          </h3>

          {formError && <div className="text-red-500 text-sm">{formError}</div>}
          {formSuccess && (
            <div className="text-green-500 text-sm">{formSuccess}</div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold links"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-2 py-3 px-4 border rounded-lg focus:outline-none borderFocuse"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold links"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full mt-2 py-3 px-4 border rounded-lg focus:outline-none borderFocuse"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold links"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="w-full mt-2 py-3 px-4 border rounded-lg focus:outline-none borderFocuse h-32 resize-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3  btn btnHover rounded-lg font-semibold  focus:outline-none  focus:borderFocuse"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
