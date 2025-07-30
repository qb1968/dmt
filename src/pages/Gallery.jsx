import { useState } from "react";
import bgImage from "../assets/download.png";

const galleryImages = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
  "/gallery/11.png",
  "/gallery/12.png",
  "/gallery/13.png",
  "/gallery/14.png",
  "/gallery/15.png",
  "/gallery/16.png",
  "/gallery/17.png",
  "/gallery/18.png",
  "/gallery/19.png",
  "/gallery/20.png",
  "/gallery/21.png",
  "/gallery/22.png",
  "/gallery/23.png",
  "/gallery/24.png",
  "/gallery/25.png",
  "/gallery/27.png",
  "/gallery/28.png",
  "/gallery/29.png",
  "/gallery/30.png",
  "/gallery/31.png",
  "/gallery/32.png",
  "/gallery/33.png",
  "/gallery/34.png",
  "/gallery/35.png",
  "/gallery/36.png",
  "/gallery/37.png",
  "/gallery/38.png",
  "/gallery/39.png",
  "/gallery/40.png",
  "/gallery/41.png",
  "/gallery/42.png",
  "/gallery/43.png",
  "/gallery/44.png",
  // "/gallery/46.jpg",
  "/gallery/47.png",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="bg-black text-white py-16 px-6 bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 font-lacquer">
          Tattoo Gallery
        </h1>
        <p className="text-center text-lg mb-12">
          Explore some of our recent work.
        </p>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Tattoo ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg opacity-90"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional Modal Viewer */}
      
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
        >
          <div className="max-w-4xl w-full p-4 relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full preview"
              className="w-full h-auto max-h-[50vh] mx-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
     
    </div>
  );
}
