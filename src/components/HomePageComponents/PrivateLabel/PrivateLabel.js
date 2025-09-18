"use client";

import ContactModal from "@/Utils/ContactModal";
import { PrivateLabellingSteps } from "@/Utils/PrivateLabelList";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PrivateLabelPage() {
  const [showContact, setShowContact] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url:"/images/peanutbutterhome.jpg",
      alt:"peanut butter"
    },
    {
      url:"/images/istockphoto-1224990176-612x612.jpg",
      alt:"peanut butter"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8B4513] mb-12">
          Private Label
        </h2>
      </div>

      {/* Main Card Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left Image */}
          <div className="lg:w-1/2 shadow-lg border rounded-l overflow-hidden relative">
            <Image
             src={images[currentIndex].url}
             alt={images[currentIndex].alt}
              // src={images[currentIndex].url}
              // alt={`${images[currentIndex].alt}`}
              width={800}
              height={600}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 bg-white p-6 sm:p-10 flex flex-col justify-center relative">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-3">
              About Private Label
            </h2>

            {/* Amber underline */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[2px] w-10 bg-amber-500"></span>
              <span className="h-[2px] w-6 bg-amber-300"></span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
              Discover the magic of Janki Herbals! We have a wide selection of
              beauty and personal care products that are perfect for you. Plus,
              we offer custom formulation services so you can have your own
              brand! We work closely with you to make sure everything meets our
              high standards for quality and performance. With Janki Herbals,
              YOU can make your brand shine brighter than ever before!
            </p>

            {/* Button */}
            <button
              onClick={() => setShowContact(true)}
              className="bg-amber-900 text-white px-6 py-3 rounded-lg shadow-lg transition flex items-center gap-2 w-fit hover:bg-amber-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10H7m14 0a2 2 0 012 2v6a2 2 0 01-2 2H7m14-10V6a2 2 0 00-2-2h-4M7 10V6a2 2 0 012-2h4m-6 6v10m0 0H5a2 2 0 01-2-2V6a2 2 0 012-2h2"
                />
              </svg>
              ENQUIRY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">
          Process Timeline
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-0  md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-300"></div>

          {PrivateLabellingSteps?.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-16 flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Card */}
              <div className="w-full md:w-1/2 px-15">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#8B4513] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Icon */}
              <div className="absolute left-0 text-xl sm:text-xl md:left-1/2  transform -translate-x-1/2 bg-white border-2 border-amber-500 rounded-full w-12 h-12 flex items-center justify-center shadow-md z-10 text-amber-900">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Form Modal */}
      {showContact && (
        <ContactModal/>
    )}
    </section>
  );
}