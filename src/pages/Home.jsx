import { useEffect, useState } from "react";
import bgImage from "../assets/download.png";
import logo from "../assets/logo1.png";
import tattooBg from "../assets/seven.png";
import artistBg from "../assets/eight.png";
import Heather from "../assets/nine.png";
import Pat from "../assets/ten.avif";
import Will from "../assets/eleven.avif";
import { FaInstagram, FaFacebook } from "react-icons/fa";

// Tattoo images
import tattoo1 from "../assets/one.avif";
import tattoo2 from "../assets/two.avif";
import tattoo3 from "../assets/three.avif";
import tattoo4 from "../assets/four.avif";
import tattoo5 from "../assets/five.avif";
import ContactUsSection from "../components/ContactUs";

const rotatingImages = [tattoo1, tattoo2, tattoo3, tattoo4, tattoo5];
const artists = [
  {
    name: "Heather Harlow",
    role: "Artist • Owner",
    image: Heather,
    bio: "Meet the owner, Heather Harlow renowned for intricate designs that blend spirituality and creativity to create mesmerizing tattoos. With a keen eye for detail and a passion for meaningful art, our artist ensures every tattoo is a divine moment etched on your skin.",
    bio2: "Hi friends! My name is Heather Harlow but everyone calls me Harlow. I have been tattooing since 2006. I am so blessed to have found my passion at an early age. I knew art would not only provide me a living, but would bring much joy and contentment in my life. I started off with pencil drawings at an early age. Throughout the years I found myself in love with all mediums. So be it watercolor, acrylic, oils, airbrushing or anything that I could express myself, I had to do it. Then I found tattooing, the one medium that challenged me the most and here I am. Forever in love with this craft and forever thankful for the mentors I have had along the way. I have worked in several locations on the east coast. I have been blessed with the opportunity to work with some amazing artist throughout the years. I am grateful for Garry's Skin Grafix to have had such an influential part of my career early on. I spent many years working there at the beginning of my career.",
    bio3: "As I got older I wanted to move closer to family so I opened Divine Moment Tattooing in 2012. I am very versatile and can do most anything. I can't say I have a favorite style. I love black and gray as well as color. I appreciate all styles of art and love a good challenge! So cover-ups are always welcome.",
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/heather.harlow.18/",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/harlowtattoo/",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    name: "Pat Ronning",
    role: "Body Modification Artis • Piercings",
    image: Pat,
    bio: "Pat has been living and working in studios around Chapel Hill & Burlington, NC for 5 years. He wanted something to call his own which led to the birth of Eternal Adornments. Although he is not a member, he adheres to the standards of the Association of Professional Piercers (APP). He is currently certified by the American Red Cross for training in CPR and First Aid Basics, as well as Blood-borne Pathogens course by ProTrainings.",
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61561899234651",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/eternaladornmentsnc",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    name: "Will Wood",
    role: "Tattoo Artist",
    image: Will,
    bio: "Hello!! My name is Will Wood and I would love to make a custom tattoo for you! I’ve recently returned to the Burlington area after spending the last five years in Europe. I would love to show you the tattoo styles that I’ve developed ! Let’s talk about making you a beautiful new project to adorn your body.",
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/williamwoodtattoos",
        icon: <FaFacebook />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/williamwoodtattoos/",
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % rotatingImages.length);
    }, 500); // fast rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60  flex items-center justify-center text-center px-4 min-h-[30vh]">
        <div className="flex items-center ">
          {/* Logo */}
          <img
            src={logo}
            alt="Ink Haven Tattoo"
            className="w-32 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-auto transition-all duration-300"
          />

          {/* Vertical Line */}
          <div className="h-30 sm:h-72 md:h-80 lg:h-72 w-1 bg-white" />

          {/* Rotating Tattoo Image */}
          <div className="h-32 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-32 sm:w-48 md:w-60 lg:w-72 xl:w-80 transition-all duration-300">
            <img
              src={rotatingImages[currentImage]}
              alt="Tattoo"
              className="h-full w-full object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-white text-black py-16 px-6 opacity-70">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Headings */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-lacquer">
              WELCOME
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-lacquer">
              TO
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-lacquer">
              DIVINE MOMENT TATTOOING STUDIO
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mt-4">
              Open 7 Days A Week
            </h3>
          </div>

          {/* Paragraph */}
          <div className="md:w-1/2 text-lg">
            <p className="text-lg sm:text-xl font-poppins leading-relaxed text-black font-bold ">
              Welcome to Divine Moment Tattooing, where we turn your body into a
              canvas of art. Our studio is a place of creativity,
              self-expression, and innovation. We specialize in creating unique
              and meaningful tattoos that capture your divine moments in life.
              Let our team of talented artists bring your vision to life with
              exceptional artistry and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section
        id="artists"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-lacquer">
            Our Artists
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {artists.map((artist, index) => (
              <div
                key={index}
                onClick={() => setSelectedArtist(artist)}
                className="bg-white/10 p-5 rounded-lg text-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                aria-label={`Open bio for ${artist.name}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedArtist(artist);
                }}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold">{artist.name}</h3>
                <p className="text-sm text-gray-300">{artist.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedArtist && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="artist-modal-title"
            aria-describedby="artist-modal-desc"
            onClick={() => setSelectedArtist(null)}
          >
            <div
              className="bg-white text-black rounded-lg p-6 max-w-md max-h-[90vh] overflow-hidden shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-1 text-black text-3xl font-bold focus:outline-none"
                onClick={() => setSelectedArtist(null)}
                aria-label="Close artist bio modal"
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />

              {/* Name & Role */}
              <h3 id="artist-modal-title" className="text-2xl font-bold mb-2">
                {selectedArtist.name}
              </h3>
              <p className="text-sm text-gray-900 mb-2 font-extrabold">
                {selectedArtist.role}
              </p>

              {/* Social Links - Check if exists */}
              {selectedArtist.socials?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-4 mb-3">
                  {selectedArtist.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:underline flex items-center gap-1"
                    >
                      {social.icon}
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Scrollable Bio */}
              <div
                id="artist-modal-desc"
                className="overflow-y-auto max-h-48 pr-3 text-base leading-relaxed space-y-3"
              >
                <p>{selectedArtist.bio}</p>
                {selectedArtist.bio2 && <p>{selectedArtist.bio2}</p>}
                {selectedArtist.bio3 && <p>{selectedArtist.bio3}</p>}
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Tattoo Designs Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${artistBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white py-24 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-lacquer">
            Tattoo Designs
          </h2>
          <p className="text-lg sm:text-xl font-poppins leading-relaxed">
            Explore our diverse range of tattoo designs that cater to various
            styles and preferences. From intricate mandalas to minimalist
            linework, each design is a manifestation of creativity and personal
            expression. Our artists specialize in customizing tattoos to capture
            your divine moment on skin.
          </p>
        </div>
      </section>
      <ContactUsSection />
    </div>
  );
}
