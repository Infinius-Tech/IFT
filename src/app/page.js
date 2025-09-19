import About from '@/components/HomePageComponents/About/About';
import Benefits from '@/components/HomePageComponents/Benefits/Benefits';
import BrandedPeanutButter from '@/components/HomePageComponents/BrandInfo/BrandInfo';
import ContactInfo from '@/components/HomePageComponents/Contact/ContactInfo';
import Gallery from '@/components/HomePageComponents/Certificate/Certificate';
import Hero from '@/components/HomePageComponents/Hero/Hero';
import Products from '@/components/HomePageComponents/Product/Products';
import Statistics from '@/components/HomePageComponents/Statistics/Statistics';
import React from 'react'
import Certificate from '@/components/HomePageComponents/Certificate/Certificate';

export const metadata = {
  title: 'Home | Indian FoodTech',
  description: 'Welcome to Indian FoodTech – your trusted source for premium peanut butter products. Explore our innovative flavors, custom formulations, and private label solutions crafted with quality ingredients to deliver taste, nutrition, and excellence worldwide.',
};

const HomePage = () => {

  const SectionSeparator = (
    <div className='flex justify-center bg-white'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="mt-6 w-[60%] sm:w-[50%] md:w-[30%]">
        <rect fill="#FFF" width="100%" height="100%" />
        <path fill="#F08C10" d="M984 26c-47 5-148 19-291 19H307C169 45 74 32 16 26c-3-1-6 2-6 5 0 2 2 4 4 5l76 9H15c-3 0-5 2-5 5s2 5 5 5h75l-76 9c-2 1-4 3-4 5 0 3 3 6 6 5 47-5 148-19 291-19h386c138 0 233 13 291 19 3 1 6-2 6-5 0-2-2-4-4-5l-76-9h75c3 0 5-2 5-5s-2-5-5-5h-75l76-9c2-1 4-3 4-5 0-3-3-6-6-5Z"></path>
      </svg>
    </div>
  );

  return (
    <>
      <Hero />
      <Statistics />
      {SectionSeparator}
      <About isHomePage={true} />
      {SectionSeparator}
      <BrandedPeanutButter />
      {SectionSeparator}
      <Products header={'Our Products'} />
      {SectionSeparator}
      <Benefits />
      {SectionSeparator}
      <Certificate />
      {SectionSeparator}
      <ContactInfo />

    </>
  )
}


export default HomePage;