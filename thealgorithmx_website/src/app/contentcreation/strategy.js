'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from "next/font/google";
import styles from "./style.module.css";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "800",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "200",
});

const StrategyGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
    );

    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }

    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen">
      {/* Header Text */}
      <div className="text-center mb-24 relative pt-20 pb-8 max-w-[1200px]">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            ref={scalableRef}
            className={`  ${styles["aligned-text"]} text-gray-600/20 select-none ${monsterfont.className} transform transition-transform duration-700 ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
          >
            ALIGNED
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-2 mt-[54px]">
          <h2 className={`${styles["aligned-subtitle"]} text-white ${monsterfont2.className} `}>
            SYNERGIZED WITH
          </h2>
          <h3 className={`${styles["aligned-subtitle"]} ${monsterfont1.className} text-white`}>
            YOUR STRATEGY
          </h3>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Lead Generation</span>
            <img src="images/lead-generation.png" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Sales Enablement</span>
            <img src="images/sales.png" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Nurturing Customers</span>
            <img src="images/nuturing.png" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Social Engagement</span>
            <img src="images/social.png" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>

        {/* Bottom Row - Centered and Spaced */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Thought Leadership</span>
            <img src="images/leadership.png" alt="Thought Leadership" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Conversions</span>
            <img src="images/conversion.png" alt="Conversions" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72 cursor-pointer transition-colors duration-300">
            <span className={`${styles["aligned-content"]}`}>Search Engine Optimization</span>
            <img src="images/SEO-.png" alt="SEO" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyGrid;
