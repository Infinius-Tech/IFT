"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/UiComponent/ContactComponent/ContactForm";

export default function ContactModal({ firstOpenDelay = 20000, reopenDelay = 80000 }) {
  const [showContact, setShowContact] = useState(true);
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    // First open after "firstOpenDelay"
    const timer = setTimeout(() => {
      setShowContact(true);
      setOpenCount(1);
    }, firstOpenDelay);

    return () => clearTimeout(timer);
  }, [firstOpenDelay]);

  const handleClose = () => {
    setShowContact(false);

    // If first close, schedule second open after "reopenDelay"
    if (openCount === 1) {
      const timer = setTimeout(() => {
        setShowContact(true);
        setOpenCount(2); // second and final open
      }, reopenDelay);

      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9998]">
          <div className="p-5 w-full md:max-w-[700px] max-w-full relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-[30px] right-[40px] text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {/* Contact Form with compact inputs */}
            <div className="space-y-3">
              <ContactForm />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
