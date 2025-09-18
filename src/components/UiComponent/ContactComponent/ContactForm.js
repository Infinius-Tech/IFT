'use client'
import { useState } from "react";
import TextInput from '../FormComponents/TextInput';
import MobileInput from "../FormComponents/MobileInput";

export default function ContactForm({isShadow}) {
const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    mobile: "",
    message: "",
  });

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

          <div>
            <form
              onSubmit={handleSubmit}
              className={`bg-white p-6  transition ${isShadow ? 'rounded-2xl shadow-lg hover:shadow-2xl' : ''}`}
            >

              {/* Contact Information */}
              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 pb-0 sm:pb-4">Get a quote from us today!</h3>

                <div className="grid gap-3">
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

                 <label className=" mt-4 block text-[#8B4513] mb-1 font-medium text-sm sm:text-md" htmlFor="message">
                    Message
                  </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border text-sm sm:text-md rounded w-full py-3 px-4 text-[#8B4513] leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500"
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
          );
        }
