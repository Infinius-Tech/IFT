// "use client";
// import Link from 'next/link';
// import { useState, useRef, useEffect } from 'react';
// import SampleRequestForm from '../HomePageComponents/SampleRequestForm/SampleRequestForm';
// import Image from 'next/image';

// const navLinks = [
//   { id: 1, title: 'Home', path: "/" },
//   { id: 2, title: 'About', path: "/about" },
//   { id: 3, title: 'Products', path: "/products", hasDropdown: true },
//   { id: 4, title: 'Gallery', path: "/gallery" },
//   { id: 5, title: 'Contact', path: "/contact" },
//   { id: 6, title: 'Sample Request', path: "#sample-request-form", isModal: true, isCta: true },
// ];

// // Product dropdown options
// const productOptions = [
//   { id: 1, title: "Peanut Butter", path: "/products#peanut-butter" },
//   { id: 2, title: "Nut Butter", path: "/products#nut-butter" },
//   { id: 3, title: "Roasted Peanut", path: "/products#roasted-peanut" },
//   { id: 4, title: "Spred", path: "/products#spred" },
// ];

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const dropdownTimer = useRef(null);

//   const handleSampleRequestClick = (e, isModal) => {
//     if (isModal) {
//       e.preventDefault();
//       setIsModalOpen(true);
//       setIsMenuOpen(false);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle dropdown hover events
//   const handleMouseEnter = () => {
//     if (dropdownTimer.current) {
//       clearTimeout(dropdownTimer.current);
//     }
//     setIsProductsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimer.current = setTimeout(() => {
//       setIsProductsDropdownOpen(false);
//     }, 300);
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsProductsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <header className="bg-[#8B4513] text-white sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <Link href="/" className="flex items-center space-x-3">
//             <div className="flex items-center">
//               <Image 
//                 src='/indianFoodtechLogo.png' 
//                 alt='Indian Foodtech Logo' 
//                 width={50} 
//                 height={50}
//                 className="rounded"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="font-bold text-lg leading-tight">INDIAN FOODTECH</span>
//               <span className="text-xs text-amber-200">Manufacturer of Peanut Butter</span>
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center space-x-6 relative">
//             {navLinks.map(link => (
//               link.hasDropdown ? (
//                 <div 
//                   key={link.id} 
//                   className="relative"
//                   ref={dropdownRef}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <button 
//                     className="hover:text-amber-200 transition flex items-center text-white py-2 px-3 rounded-md"
//                   >
//                     {link.title}
//                     <svg 
//                       className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {isProductsDropdownOpen && (
//                     <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//                       {productOptions.map(option => (
//                         <Link
//                           key={option.id}
//                           href={option.path}
//                           className="block px-4 py-2 text-sm text-gray-800 hover:bg-amber-100"
//                           onClick={() => setIsProductsDropdownOpen(false)}
//                         >
//                           {option.title}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : link.isCta ? (
//                 // Special styling for Sample Request button
//                 <div key={link.id} className="ml-4">
//                   <button
//                     onClick={(e) => handleSampleRequestClick(e, link.isModal)}
//                     className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md flex items-center"
//                   >
//                     <span className="mr-2">Sample Request</span>
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                     </svg>
//                   </button>
//                 </div>
//               ) : (
//                 <Link 
//                   key={link.id} 
//                   href={link.path}
//                   className="hover:text-amber-200 transition text-white py-2 px-3 rounded-md"
//                 >
//                   {link.title}
//                 </Link>
//               )
//             ))}
//           </nav>

//           <button 
//             className="md:hidden" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-[#8B4513] py-4 px-4">
//             <div className="flex flex-col space-y-3">
//               {navLinks.map(link => (
//                 link.hasDropdown ? (
//                   <div key={link.id}>
//                     <button 
//                       className="hover:text-amber-200 transition w-full text-left py-2 px-3 rounded-md"
//                       onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
//                     >
//                       <div className="flex justify-between items-center">
//                         {link.title}
//                         <svg 
//                           className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
//                           fill="none" 
//                           viewBox="0 0 24 24" 
//                           stroke="currentColor"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </div>
//                     </button>
//                     {isProductsDropdownOpen && (
//                       <div className="pl-4 mt-2 space-y-2">
//                         {productOptions.map(option => (
//                           <Link
//                             key={option.id}
//                             href={option.path}
//                             className="block text-amber-100 hover:text-amber-200 transition py-2"
//                             onClick={() => {
//                               setIsProductsDropdownOpen(false);
//                               setIsMenuOpen(false);
//                             }}
//                           >
//                             {option.title}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : link.isCta ? (
//                   // Special styling for Sample Request button in mobile
//                   <button
//                     key={link.id}
//                     onClick={(e) => {
//                       setIsMenuOpen(false);
//                       handleSampleRequestClick(e, link.isModal);
//                     }}
//                     className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-5 rounded-full transition-all duration-300 w-full text-center mt-2"
//                   >
//                     {link.title}
//                   </button>
//                 ) : (
//                   <Link 
//                     key={link.id} 
//                     href={link.path}
//                     className="hover:text-amber-200 transition py-2 px-3 rounded-md block"
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                     }}
//                   >
//                     {link.title}
//                   </Link>
//                 )
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-[#000000bf] flex items-center justify-center z-50 p-4">
//           <div className="bg-white w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-2xl font-bold text-gray-800">Request a Sample</h2>
//               <button 
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" 
//                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                     d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <div className="p-6">
//               <SampleRequestForm />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Header;




"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SampleRequestForm from '../HomePageComponents/SampleRequestForm/SampleRequestForm';
import Image from 'next/image';
import LogoComponent from '../LogoComponent/LogoComponent';

const navLinks = [
  { id: 1, title: 'HOME', path: "/" },
  { id: 2, title: 'ABOUT US', path: "/aboutUs" },
  { id: 3, title: 'PRODUCTS', path: "/products", hasDropdown: true },
  // { id: 4, title: 'PRIVATE LABELLING', path: "/private-labelling" },
  { id: 5, title: 'CONTACT US', path: "/contact" },
  // { id: 6, title: 'CLIENTELE', path: "/clientele" },
  { id: 7, title: 'Sample Request', path: "#sample-request-form", isModal: true, isCta: true },
];

// Product dropdown options
const productOptions = [
  { id: 1, title: "Peanut Butter", path: "/products#peanut-butter" },
  { id: 2, title: "Nut Butter", path: "/products#nut-butter" },
  { id: 3, title: "Roasted Peanut", path: "/products#roasted-peanut" },
  { id: 4, title: "Spred", path: "/products#spred" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [ctaButtonColor, setCtaButtonColor] = useState("bg-amber-600");
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

  // Color animation effect for the CTA button
  // useEffect(() => {
  //   const colorInterval = setInterval(() => {
  //     setCtaButtonColor(prevColor => 
  //       prevColor === "bg-amber-600" ? "bg-green-600" : "bg-amber-600"
  //     );
  //   }, 1000);

  //   return () => {
  //     clearInterval(colorInterval);
  //   };
  // }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className='bg-amber-800 h-[80px] sticky top-0 z-50' >
        <div className="text-white text-xs py-1 ">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 97148 99711
              </span>
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                office@indianfoodtech.in
              </span>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-200 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className="text-gray-800 flex justify-center">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center bg-white shadow-md">
            <Link href="/" className="flex items-center space-x-3">
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
                      className="hover:bg-amber-100 transition flex items-center text-gray-800 py-2 px-3 rounded-md font-bold text-sm"
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
                    className="hover:bg-amber-100 transition text-gray-800 py-2 px-3 rounded-md font-bold text-sm"
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
            <div className="md:hidden bg-white py-4 px-4 shadow-lg">
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

    </>
  );
}

export default Header;