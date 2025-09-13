"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Building, MessageSquare } from "lucide-react";
import { indianFoodTechPhone } from "@/Utils/CommonConst";
import MobileInput from "@/components/UiComponent/FormComponents/MobileInput";
import TextInput from "@/components/UiComponent/FormComponents/TextInput";

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChange = (e) => {
    console.log("input changesss", e);

    const { name, value } = e.target;

    // Apply regex validation based on field type
    let errorMessage = '';

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited and valid
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const [errors, setErrors] = useState({
    name: '',
    businessName: '',
    email: '',
    mobile: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const submissionData = {
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      mobile: formData.mobile, 
      message: formData.message,
      formType: "contactUS",
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to submit form");
      }

      // First show success message before any state changes
      alert("Your message has been sent successfully ✅");

      // Then reset form after success
      setFormData({
        name: "",
        businessName: "",
        email: "",
        mobile: "",   
        message: "",
      });
      
      setErrors({
        name: "",
        businessName: "",
        email: "",
        mobile: "",
      });
      
      // Reset any checkboxes if they are added in future
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form: " + error.message);
    }
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
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-amber-800 mb-4 pb-8">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    type="text"
                    error={errors.name}
                    validateRegex={/^[a-zA-Z\s]+$/}
                  />

                  <TextInput
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your Business Name"
                    type="text"
                    error={errors.businessName}

                  />

                  <TextInput
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    type="email"
                    error={errors.email}
                  />

                  <MobileInput
                    label="WhatsApp Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="123-456-7890"
                    error={errors.mobile}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full bg-[#8B4513] hover:bg-[#6B8E23] text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ------------------------------- */}
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