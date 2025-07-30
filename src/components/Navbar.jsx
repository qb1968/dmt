import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-8 justify-center">
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>
      <a href="#artists" className="hover:text-gray-300">
        Artists
      </a>
      <Link to="/gallery" className="hover:text-gray-300">
        Gallery
      </Link>
      <Link to="/contact" className="hover:text-gray-300">
        Contact
      </Link>
    </nav>
  );
}
