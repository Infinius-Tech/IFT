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

const HomePage = () => (
  <>
    <Hero />
    <Statistics />
    <About isHomePage={true} />
    <BrandedPeanutButter />
    <Products header={'Our Products'}/>
    <Benefits />
    <Certificate />
    <ContactInfo />
   
  </>
);


export default HomePage;