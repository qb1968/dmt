import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-400 font-bold">
          © {new Date().getFullYear()} <Link to="https://allwebcon.com" target="_blank" className="underline font-extrabold text-white">Allison Web Consultants</Link>. All rights
          reserved.
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
