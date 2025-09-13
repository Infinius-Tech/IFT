import Image from 'next/image';
import React from 'react';
import './LogoComponent.css';

const LogoComponent = ({ textColor = "text-black" }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        <Image
          src='/indianFoodtechLogo.png'
          alt='Indian Foodtech Logo'
          width={60}
          height={60}
          className="logoImageheader"
        />
      </div>
      <div className="flex flex-col mt-[10px] ml-[8px]">
        <span className={`logoFont text-2xl ${textColor} leading-tight font-light whitespace-nowrap`}>INDIAN FOODTECH</span>
        <span className={`text-xs font-bold ${textColor} text-right mt-[-5px] mr-[2px] whitespace-nowrap`}>Manufacturer of Peanut Butter</span>
      </div>
    </div>
  );
}

export default LogoComponent;
