"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/UiComponent/ContactComponent/ContactForm";

export default function ContactModal({ autoOpenInterval = 1000}) {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContact(true);
    }, autoOpenInterval);

    return () => clearInterval(interval);
  }, [autoOpenInterval]);

  return (
    <>
      {/* Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative">
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
    </>
  );
}