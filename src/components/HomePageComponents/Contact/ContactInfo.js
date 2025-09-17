"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Building, MessageSquare } from "lucide-react";
import { indianFoodTechPhone } from "@/Utils/CommonConst";
import ContactForm from "@/components/UiComponent/ContactComponent/ContactForm";

export default function ContactInfo() {
  
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
            Contact Us
          </h2>
          <p className="text-[#8B4513] max-w-2xl mx-auto opacity-80">
            Have questions about our products or services? Fill out the form or
            get in touch with us directly — we&#39;d love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#6B8E23] mb-4">
                Get In Touch
              </h3>
              <p className="text-[#8B4513] mb-6 opacity-80">
                Interested in our products? Have questions about bulk orders or
                custom formulations? Reach out to our team for more information.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#8B4513]">
                  <Clock className="w-6 h-6 text-[#8B4513]" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex items-center gap-3 text-[#8B4513]">
                  <Mail className="w-6 h-6 text-[#8B4513]" />
                  <span>office@indianfoodtech.in</span>
                  {/* indianFoodTechEmail */}
                </div>
                <div className="flex items-center gap-3 text-[#8B4513]">
                  <Phone className="w-6 h-6 text-[#8B4513]" />
                  <span>+91 97148 99711</span>
                </div>
                <div className="flex items-center gap-3 text-[#8B4513]">
                  <Building className="w-6 h-6 text-[#8B4513]" />
                  <div>
                    <p>Ground Floor, Plot No. 196, 197, 198, </p>
                    <p> Om Industries Estate, Vibhag-1, Village - Mankna, </p>
                    <p>Kamrej, Surat - 394190, Gujarat, India</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps?q=21.20460098512739, 72.990028915698&hl=es;z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indian Foodtech Location"
                  ></iframe>
                </div>
              </div>
              <a
                //  href="https://wa.me/+919714899711"
                href={`https://wa.me/${indianFoodTechPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center bg-[#25D366] hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
         <ContactForm />
        </div>
      </div>

      {/* Add global styles for autofill in browsers that don't support the autofill: selector */}
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #8B4513;
          -webkit-box-shadow: 0 0 0px 1000px #FFFBEB inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </section>
  );
}