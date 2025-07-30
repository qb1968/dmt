import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon library

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
