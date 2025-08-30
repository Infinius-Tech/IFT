"use client";

import { useEffect, useRef, useState } from 'react';
import { Globe, Heart, TrendingUp, Package } from 'lucide-react';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // State for animated values
  const [exportedCountries, setExportedCountries] = useState(0);
  const [productRange, setProductRange] = useState(0);
  const [productionCapacity, setProductionCapacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Start animations when component is visible
          animateValue(setExportedCountries, 0, 10, 2000);
          animateValue(setProductRange, 0, 15, 2000);
          animateValue(setProductionCapacity, 0, 5, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to animate value changes
  const animateValue = (setter, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setter(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-amber-100 to-amber-200 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#8B4513] mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            MAKING PEOPLE HEALTHY SINCE 2019
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Export Countries */}
          <div className={`bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-amber-700" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-2">
              {exportedCountries}+
            </div>
            <h3 className="text-xl font-semibold text-[#654321] mb-2">EXPORTED TO COUNTRIES</h3>
            <p className="text-amber-700">We Serve Global Market</p>
          </div>

          {/* Product Range */}
          <div className={`bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-amber-700" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-2">
              {productRange}+
            </div>
            <h3 className="text-xl font-semibold text-[#654321] mb-2">WIDE RANGE OF PEANUT BUTTER</h3>
            <p className="text-amber-700">Serving Every Taste Buds</p>
          </div>

          {/* Production Capacity */}
          <div className={`bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-amber-700" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-2">
              {productionCapacity}MT <span className="text-xl">/DAY</span>
            </div>
            <h3 className="text-xl font-semibold text-[#654321] mb-2">PRODUCTION CAPACITY</h3>
            <p className="text-amber-700">Up To 95% Uptime Delivery</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center text-amber-700">
            <Heart className="w-6 h-6 mr-2 fill-current" />
            <span className="font-medium">Quality & Excellence Since 1992</span>
          </div>
        </div>
      </div>
    </section>
  );
}