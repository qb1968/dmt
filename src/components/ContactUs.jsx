import { Link } from "react-router-dom";
import "./ContactUs.css"

const ContactUsSection = () => (
  <section className="relative text-white py-20 px-6 overflow-hidden animated-gradient">
    {/* Glossy Overlay */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none z-0" />

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 font-lacquer">Contact Us Today</h2>
      <p className="text-lg mb-6">
        Ready to book your next tattoo or ask a question? Reach out — we'd love
        to hear from you.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-200 transition duration-300"
      >
        Go to Contact Page
      </Link>
    </div>
  </section>
);

export default ContactUsSection;
