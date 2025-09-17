'use client'

import SampleRequestForm from "@/components/HomePageComponents/SampleRequestForm/SampleRequestForm";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/images/peanutButterHeroBackground.jpg',
    '/images/peanutbutterjar.png',
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 8000);

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`${styles.heroContainer} relative flex items-center justify-center overflow-hidden`}>
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
      </div>

      {isModalOpen && (
        <SampleRequestForm closeModal={closeModal} />
      )}
    </section>
  );
}

