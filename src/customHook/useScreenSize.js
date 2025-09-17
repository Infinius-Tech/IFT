import { useState, useEffect } from 'react';

const useScreenSize = (breakpoint = 1024) => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isLargeScreen: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isLargeScreen: width >= breakpoint,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      });
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return screenSize;
};

export default useScreenSize;