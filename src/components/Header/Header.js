"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SampleRequestForm from '../HomePageComponents/SampleRequestForm/SampleRequestForm';
import LogoComponent from '../LogoComponent/LogoComponent';
import styles from './Header.module.css';
import { facebookProfile, indianFoodTechEmail, indianFoodTechPhone, linkdinProfile } from '@/Utils/CommonConst';
import useScreenSize from '@/customHook/useScreenSize';

const navLinks = [
  { id: 1, title: 'HOME', path: "/" },
  { id: 2, title: 'ABOUT US', path: "/aboutUs" },
  { id: 3, title: 'PRODUCTS', path: "/products", hasDropdown: true },
  { id: 4, title: 'PRIVATE LABEL', path: "/private-label" },
  { id: 5, title: 'CONTACT US', path: "/contact" },
  { id: 6, title: 'Sample Request', path: "#sample-request-form", isModal: true, isCta: true },
  // { id: 7, title: 'Gallery', path: "/gallery" },
];

// Product dropdown options
const productOptions = [
  { id: 1, title: "Peanut Butter", path: "/products#peanut-butter" },
  { id: 2, title: "Nut Butter", path: "/products#nut-butter" },
  { id: 3, title: "Roasted Peanut", path: "/products#roasted-peanut" },
  { id: 4, title: "Spred", path: "/products#spred" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [ctaButtonColor, setCtaButtonColor] = useState("bg-amber-600");
  
  // Use the custom hook
  const { isLargeScreen } = useScreenSize(1024);
  //Mobile
  
  const dropdownRef = useRef(null);
  const dropdownTimer = useRef(null);

  const handleSampleRequestClick = (e, isModal) => {
    if (isModal) {
      e.preventDefault();
      setIsModalOpen(true);
      setIsMenuOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle phone click based on screen size
  const handlePhoneClick = (e) => {
    if (isLargeScreen) {
      e.preventDefault();
      // Open WhatsApp on large screens
      window.open(`https://wa.me/${indianFoodTechPhone.replace(/\D/g, '')}`, '_blank');
    }
    // On small screens, default tel: link behavior will work
  };

  // Handle dropdown hover events
  const handleMouseEnter = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 300);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      {/* Top contact bar */}
      <div className={`${styles.topBar} bg-amber-800 top-0 z-50 w-full`} >
        <div className="text-white text-xs py-1 w-full">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <a 
                href={`tel:${indianFoodTechPhone}`} 
                onClick={handlePhoneClick}
                className="flex items-center hover:text-amber-200 transition"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {indianFoodTechPhone}
              </a>
              <a href={`mailto:${indianFoodTechEmail}`} className="flex items-center hover:text-amber-200 transition">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {indianFoodTechEmail}
              </a>
            </div>
            <div className="flex space-x-2">
              <a href={facebookProfile} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href={linkdinProfile} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className="text-gray-800 flex justify-center relative w-full bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center w-full">
            <Link href="/" className="flex items-center space-x-3 py-4">
              <LogoComponent textColor="text-black" />
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                link.hasDropdown ? (
                  <div
                    key={link.id}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="hover:bg-amber-100 transition flex items-center text-gray-800 py-2 px-3 rounded-md text-sm"
                    >
                      {link.title}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                        {productOptions.map(option => (
                          <Link
                            key={option.id}
                            href={option.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-50"
                            onClick={() => setIsProductsDropdownOpen(false)}
                          >
                            {option.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.isCta ? (
                  // Special styling for Sample Request button
                  <div key={link.id} className="ml-2">
                    <button
                      onClick={(e) => handleSampleRequestClick(e, link.isModal)}
                      className={`${ctaButtonColor} hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 shadow text-sm`}
                    >
                      {link.title}
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.id}
                    href={link.path}
                    className="hover:bg-amber-100 transition text-gray-800 py-2 px-3 rounded-md text-sm"
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </nav>

            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-4 shadow-lg w-full absolute top-full left-0 z-50">
              <div className="flex flex-col space-y-2">
                {navLinks.map(link => (
                  link.hasDropdown ? (
                    <div key={link.id}>
                      <button
                        className="hover:bg-amber-100 transition w-full text-left py-2 px-3 rounded-md font-medium"
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      >
                        <div className="flex justify-between items-center">
                          {link.title}
                          <svg
                            className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {isProductsDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {productOptions.map(option => (
                            <Link
                              key={option.id}
                              href={option.path}
                              className="block text-gray-700 hover:bg-amber-50 transition py-2 px-3 rounded-md"
                              onClick={() => {
                                setIsProductsDropdownOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {option.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.isCta ? (
                    // Special styling for Sample Request button in mobile
                    <button
                      key={link.id}
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        handleSampleRequestClick(e, link.isModal);
                      }}
                      className={`${ctaButtonColor} hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded transition-all duration-300 w-full text-center mt-2`}
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link
                      key={link.id}
                      href={link.path}
                      className="hover:bg-amber-100 transition py-2 px-3 rounded-md block font-medium"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </header>
      </div>
      {isModalOpen && (
        <SampleRequestForm closeModal={closeModal} />
      )}
    </div>
  );
}

