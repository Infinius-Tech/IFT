import MobileInput from "@/components/UiComponent/FormComponents/MobileInput";
import TextInput from "@/components/UiComponent/FormComponents/TextInput";
import Modal from "@/components/UiComponent/ModalComponent/Modal";
import { AllProductsList } from "@/Utils/ProductList";
import { useState } from "react";

export default function SampleRequestForm({ closeModal }) {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    mobile: '',
    website: '',
    address: '',
    message: '',
    selectedProducts: {},
  });

  // Validation errors state
  const [errors, setErrors] = useState({
    name: '',
    businessName: '',
    email: '',
    mobile: '',
    website: '',
    address: ''
  });

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
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


  // Handle product selection
  const handleProductSelection = (productId, checked) => {
    setFormData(prev => {
      const updatedProducts = { ...prev.selectedProducts };

      if (checked) {
        updatedProducts[productId] = true;
        // Clear product selection error if at least one product is selected
        setProductSelectionError('');
      } else {
        delete updatedProducts[productId];
        // Check if there are no products selected after deletion
        if (Object.keys(updatedProducts).length === 0) {
          setProductSelectionError('Please select at least one product');
        }
      }

      return {
        ...prev,
        selectedProducts: updatedProducts
      };
    });
  };

  // State for product selection error
  const [productSelectionError, setProductSelectionError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one product is selected
    if (Object.keys(formData.selectedProducts).length === 0) {
      setProductSelectionError('Please select at least one product');
      return;
    }

    // Get selected product names
    const selectedProductIds = Object.keys(formData.selectedProducts);
    const selectedItems = [];

    AllProductsList.forEach(category => {
      category.products.forEach(product => {
        if (selectedProductIds.includes(product.id)) {
          selectedItems.push(`${product.name} (${category.categoryName})`);
        }
      });
    });

    // Prepare data for submission
    const submissionData = {
      name: formData.name,
      businessName: formData.businessName,
      email: formData.email,
      mobile: formData.mobile,
      website: formData.website,
      address: formData.address,
      message: formData.message,
      selectedProducts: selectedItems,
      formType: 'sampleRequest'
    };

    console.log('Sample Request Form submission:', submissionData);

    try {
      // Use absolute URL to avoid any path confusion
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit form');
      }
      
      // First show success alert (before any state updates)
      alert("Your sample request has been submitted successfully ✅");
      
      // Then update states
      setIsSubmitted(true);
      
      // Reset form data and errors
      setFormData({
        name: '',
        businessName: '',
        email: '',
        mobile: '',
        website: '',
        address: '',
        message: '',
        selectedProducts: {},
      });
      
      setErrors({
        name: '',
        businessName: '',
        email: '',
        mobile: '',
        website: '',
        address: ''
      });
      
      setProductSelectionError('');
      
      // Reset checkboxes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      
      // Close modal after a short delay
      setTimeout(() => {
        closeModal();
      }, 1500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form: ' + error.message);
      return; // Exit function on error to prevent showing success message
    }
  };

  return (
    <Modal closeModal={closeModal} headerText="Request a Sample">
      <div className="p-4 md:p-6">
        <div className="bg-amber-50">
          <div id="sample-request-form" className="container mx-auto px-2 py-6 sm:px-4 sm:py-8 md:py-12">
            {isSubmitted ? (
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-green-100 rounded-full p-3 md:p-4 mb-4">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Sample Request Submitted!</h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6">Thank you for your interest in our products. We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-amber-600 py-3 px-4 md:py-4 md:px-6">
                    <h1 className="text-lg md:text-2xl font-bold text-white">Product Sample Request</h1>
                    <p className="text-xs md:text-base text-amber-100">Select products from our categories to request samples</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-4 md:p-6">
                    {/* Contact Information */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-3 md:mb-4 border-b pb-2">Company Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                        <TextInput
                          label="Website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="www.yourwebsite.com"
                          type="text"
                          error={errors.website}
                        />

                        <TextInput
                          label="Address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main St, City, Country"
                          type="text"
                          error={errors.address}
                        />
                      </div>
                    </div>

                    {/* Product Selection */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-semibold text-amber-800 mb-3 md:mb-4 border-b pb-2">Select Products for Sample</h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">Choose products you&apos;re interested in sampling:</p>
                      {productSelectionError && <p className="text-red-500 text-xs md:text-sm mb-2">{productSelectionError}</p>}

                      <div className="space-y-4 md:space-y-6">
                        {AllProductsList.map(category => (
                          <div key={category.id} className="border border-amber-200 rounded-lg p-3 md:p-5 bg-amber-50">
                            <h4 className="font-medium text-base md:text-lg text-amber-800 mb-3 md:mb-4 flex items-center">
                              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                              </svg>
                              {category.categoryName}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                              {category.products.map(product => (
                                <div key={product.id} className="flex items-center bg-white p-2 md:p-3 rounded border border-amber-100">
                                  <input
                                    id={`product-${product.id}`}
                                    type="checkbox"
                                    onChange={(e) => handleProductSelection(product.id, e.target.checked)}
                                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                  />
                                  <label htmlFor={`product-${product.id}`} className="ml-2 md:ml-3 text-sm md:text-base text-gray-700">
                                    {product.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6 md:mb-8">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 md:py-3 md:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                        placeholder="Tell us about your specific needs, target market, or any questions you have about our products..."
                      ></textarea>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">Please provide any specific requirements or questions you may have.</p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center text-sm md:text-base"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-6 md:mt-8 text-center text-sm md:text-base text-gray-600">
                  <p>We&apos;ll get back to you within 24 hours to confirm your sample request.</p>
                  <p className="mt-2 text-xs md:text-sm">For urgent inquiries, please call us at <span className="text-amber-600 font-medium">+1 (555) 123-4567</span></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}