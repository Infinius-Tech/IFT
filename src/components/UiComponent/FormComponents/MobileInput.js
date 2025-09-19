import React, { useEffect, useRef, useState } from 'react';    
import {countries} from '@/Utils/CountryList';

// Country code data
const countryCodes = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
];

console.log(countries);


export default function MobileInput({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = "Enter mobile number",
  defaultCountryCode = '91'
}) {
  const [selectedCountryCode, setSelectedCountryCode] = useState(defaultCountryCode);
  const [mobileNumber, setMobileNumber] = useState(value || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef();

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onMobileNumberChange = (e) => {
    const { value } = e.target;
    if (/^\d{0,15}$/.test(value)) {
      setMobileNumber(value);
      onChange({ target: { name, value: selectedCountryCode + '-' + value } });
    }
  };

  const handleCountryCodeChange = (countryCode) => {
    setSelectedCountryCode(countryCode);
    setIsDropdownOpen(false);
    setSearchTerm('');
    onChange({ target: { name, value: countryCode + '-' + mobileNumber } });
  };

  const selectedCountry = countries.find(c => c.code === selectedCountryCode);

  // Filter countries by search term
  const filteredCountries = countries.filter(
    c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.code.includes(searchTerm)
  );

  return (
    <div className="relative">
      <label className="block text-sm sm:text-md text-[#8B4513] mb-2 font-medium" htmlFor={name}>
        {label}
      </label>

      <div className='flex '>
        {/* Country Picker */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="h-full px-3 py-3 border-[1px] border-r-0 border-[#8B4513] rounded-l-xl focus:outline-none flex items-center "
          >
            <span className="text-sm font-medium text-[#8B4513]">
              +{selectedCountryCode}
              {/* {selectedCountry?.flag} */}
            </span>
            <svg
              className={`w-4 h-4 ml-1 text-[#8B4513] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 max-h-60 bg-white border rounded-lg shadow-lg z-10">
              <div className="p-2 border-b border-gray-200 text-black">
                <input
                  type="text"
                  placeholder="Search countries..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="py-1 max-h-48 overflow-y-auto">
                {filteredCountries.map(country => (
                  <button
                    key={country.phonecode}
                    type="button"
                    className={`w-full text-left px-4 py-2 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none text-sm ${selectedCountryCode === country.code ? 'bg-amber-100 text-[#8B4513]' : 'text-gray-900'}`}
                    onClick={() => handleCountryCodeChange(country.code)}
                  >
                    {/* <span className="mr-2">{country.flag}</span> */}
                    <span className="font-medium">+{country.code}</span>
                    <span className="text-gray-600 ml-2">{country.name}</span>
                  </button>
                ))}
                {filteredCountries.length === 0 && (
                  <p className="text-gray-500 text-sm px-4 py-2">No countries found</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Number Input */}
        <input
          id={name}
          name={name}
          type="text"
          value={mobileNumber}
          onChange={onMobileNumberChange}
          placeholder={placeholder}
          className="shadow appearance-none text-sm sm:text-md border rounded-r-xl w-full py-3 px-4 text-[#8B4513] leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
