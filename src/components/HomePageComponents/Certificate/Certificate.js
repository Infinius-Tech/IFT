'use client';

import Image from "next/image";
import { useState } from "react";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { 
      id: 1, 
      alt: "Fasai Certificate", 
      caption: "Fasai Certificate", 
      src: "/images/certificates/fasai_certificate.jpg"
    },
    { 
      id: 2, 
      alt: "Halal Certificate", 
      caption: "Halal Certificate", 
      src: "/images/certificates/halal_certificate.jpg" 
    },
    { 
      id: 3, 
      alt: "Import Certificate", 
      caption: "Import Certificate", 
      src: "/images/certificates/import_certificate.jpg" 
    },
    { 
      id: 4, 
      alt: "ISO Certificate", 
      caption: "ISO Certificate", 
      src: "/images/certificates/iso_certificate.jpg" 
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    // <section className={`py-16 bg-gradient-to-b from-amber-50 to-white`}>
    <section className={`py-16 bg-white`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-4">
          Our Certifications
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We maintain the highest standards of quality and safety, as evidenced by our industry certifications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map(image => (
            <div 
              key={image.id} 
              className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="relative h-[480px] rounded-xl overflow-hidden shadow-lg border-8 border-amber-100 bg-amber-50 p-2">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-amber-300 z-10"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-amber-300 z-10"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-amber-300 z-10"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-amber-300 z-10"></div>
                
                <div className="relative h-full w-full">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill
                    className="object-contain transition-opacity duration-300 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                
                {/* Overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-center">{image.caption}</p>
                  <p className="text-amber-200 text-xs text-center mt-1">Click to enlarge</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden border-8 border-amber-100 shadow-2xl">
            <button 
              className="absolute top-4 right-4 z-10 bg-amber-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-800 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative h-[80vh] w-full">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-amber-800/90 text-white p-4 text-center">
              <p className="font-bold text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}