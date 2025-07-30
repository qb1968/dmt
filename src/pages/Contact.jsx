import React, { useState } from "react";
import bgImage from "../assets/download.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
     });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://submit-form.com/NTrzcaisA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-lg shadow-md ">
        <h2 className="text-4xl font-bold text-center mb-4 font-lacquer">
          Contact Us
        </h2>
        <p className="text-center text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          For inquiries and appointments, please fill out the form below.
        </p>

        {/* Contact Info */}
        <div className="text-center mb-12 space-y-1 sm:space-y-3">
          <h3 className="text-3xl font-semibold font-lacquer">
            Divine Moment Tattooing Studio
          </h3>
          <p className="text-xl font-light italic">Where art meets passion.</p>
          <p className="text-lg sm:text-xl mt-4">
            138 W Front Street Burlington, NC
          </p>
          <p className="text-lg sm:text-xl">
            Phone: 336-653-1941 or 336-343-9456
          </p>
          <p className="text-lg sm:text-xl">
            Email: harlowtattoobooking@gmail.com
          </p>
          <p className="text-lg sm:text-xl mt-4 font-semibold">Our Hours</p>
          <p className="text-lg sm:text-xl">7 Days A Week | 12PM - 9PM</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/30 p-8 rounded-lg shadow-md max-w-xl mx-auto"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded font-semibold transition duration-300"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 font-medium text-center mt-3 animate-fade-in">
              ✅ Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium text-center mt-3">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700 mt-16 max-w-4xl mx-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4559.367215490688!2d-79.43893265591097!3d36.09447586456634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bb205fd9d55%3A0x83e608511b1dfdbb!2sDivine%20Moment%20Tattooing!5e0!3m2!1sen!2sus!4v1753583801796!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
