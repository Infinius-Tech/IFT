import About from '@/components/HomePageComponents/About/About';
import Benefits from '@/components/HomePageComponents/Benefits/Benefits';
import BrandedPeanutButter from '@/components/HomePageComponents/BrandInfo/BrandInfo';
import ContactInfo from '@/components/HomePageComponents/Contact/ContactInfo';
import Gallery from '@/components/HomePageComponents/Gallery/Gallery';
import Hero from '@/components/HomePageComponents/Hero/Hero';
import Products from '@/components/HomePageComponents/Product/Products';
import Statistics from '@/components/HomePageComponents/Statistics/Statistics';
import React from 'react'

export const metadata = {
  title: 'Home | Penaut Butter',
  description: '',
};

const HomePage = () => (
  <>
    <Hero />
    <Statistics />
    <About />
    <BrandedPeanutButter />
    <Products header={'Our Products'}/>
    <Benefits />
    <Gallery />
    <ContactInfo />
  </>
);


export default HomePage;