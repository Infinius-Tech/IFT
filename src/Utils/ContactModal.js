"use client";

import { useEffect, useState, useRef } from "react";
import ContactForm from "@/components/UiComponent/ContactComponent/ContactForm";

export default function ContactModal({ firstOpenDelay = 20000, reopenDelay = 300000 }) {
  const [showContact, setShowContact] = useState(false);
  const firstOpenDone = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Show first time after "firstOpenDelay"
    timerRef.current = setTimeout(() => {
      setShowContact(true);
      firstOpenDone.current = true;
    }, firstOpenDelay);

    return () => clearTimeout(timerRef.current);
  }, [firstOpenDelay]);

  const handleClose = () => {
    setShowContact(false);

    // Re-open after "reopenDelay"
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowContact(true);
    }, reopenDelay);
  };

  return (
    <>
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative">
            <button
              onClick={handleClose}
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