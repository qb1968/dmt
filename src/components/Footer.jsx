import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-400 font-bold">
          © {new Date().getFullYear()}{" "}
          <Link
            to="https://allwebcon.com"
            target="_blank"
            className="underline font-extrabold text-white"
          >
            Allison Web Consultants
          </Link>
          . All rights reserved.
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="https://www.facebook.com/heather.harlow.18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/harlowtattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/DivineMomentTattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
