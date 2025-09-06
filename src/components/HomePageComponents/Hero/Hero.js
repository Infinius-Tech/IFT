'use client'

import SampleRequestForm from "@/components/HomePageComponents/SampleRequestForm/SampleRequestForm";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images to cycle through
  const backgroundImages = [
    '/images/peanutButterHeroBackground.jpg',
    '/images/peanutbutterjar.png',
    // '/images/presentingHealthyNutPeanutButterVarieties.png',
    // '/images/naturalPeanutButterDelight.png',
  ];

  useEffect(() => {
    // Set up timer to change image every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000);

    // Clean up interval on component unmount
    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  const openSampleRequestModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`${styles.heroContainer} relative flex items-center justify-center overflow-hidden`}>
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`${styles.heroBackground} ${styles['heroBackground' + index]}`}
            style={{ 
              backgroundImage: `url('${image}')`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          ></div>
        ))}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-green-900/30"></div> */}
      </div>

      {/* Content with text shadow for better readability */}
      {isModalOpen && (
        <SampleRequestForm closeModal={closeModal} />
      )}
    </section>
  );
}

