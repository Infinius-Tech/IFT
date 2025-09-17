"use client";

import ContactForm from "@/components/UiComponent/ContactComponent/ContactForm";
import { PrivateLabellingSteps } from "@/Utils/PrivateLabelList";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PrivateLabelPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-amber-50">
      {/* About Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 text-center bg-amber-900 text-white overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Private Label Peanut Butter
        </h1>
        <p className="max-w-3xl mx-auto leading-relaxed text-base sm:text-lg px-2">
          At <span className="font-semibold">IndianFoodTech</span>, we infuse
          our private label peanut butter process with{" "}
          <span className="font-semibold">care, innovation, and dedication</span>.
          From concept to final jar, every step is crafted to ensure your
          brand’s growth, quality, and success in the food industry.
        </p>
      </section>

      {/* Process Timeline */}
      <section className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-amber-900"
        >
          Our Private Label Process
        </motion.h2>

        <div className="relative">
          {/* Vertical Line (only for md+) */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-amber-200 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-20">
            {PrivateLabellingSteps?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
                className={`relative flex flex-col sm:flex-row items-center sm:items-start w-full ${
                  index % 2 === 0
                    ? "sm:justify-start"
                    : "sm:justify-end sm:text-right"
                }`}
              >
                {/* Icon */}
                <div className="bg-white border-2 border-amber-900 rounded-full p-4 sm:p-5 text-amber-900 text-xl sm:text-2xl z-20 shadow-md mb-4 sm:mb-0">
                  {step.icon}
                </div>

                {/* Card - always visible */}
                <div className="w-full sm:w-5/12 bg-white border border-amber-100 rounded-xl shadow-sm p-5 sm:p-8 z-10 hover:shadow-lg transition duration-300 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-2 sm:mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY BUTTON */}
      <div className="flex justify-center py-8 sm:py-12">
        <button
          onClick={() => setShowContact(true)}
          className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-amber-900 rounded-full shadow-lg hover:bg-amber-800 hover:scale-105 transition-transform duration-300"
        >
          ENQUIRY NOW
        </button>
      </div>

      {/* Contact Form Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4 z-[9998]">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg sm:max-w-4xl w-full relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
