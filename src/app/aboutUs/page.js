import About from '@/components/HomePageComponents/About/About';
import React from "react";

export const metadata = {
  title: 'About | Indian FoodTech',
  description: 'Discover our story of crafting premium peanut butter with natural ingredients. Learn about our passion for quality, sustainable practices, and commitment to delivering delicious, wholesome products to our customers.',
};

const AboutPage = () => (
  <>
    <About isHomePage={false} />
  </>
);

export default AboutPage;