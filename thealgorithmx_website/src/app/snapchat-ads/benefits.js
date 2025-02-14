'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css"
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const SnapchatServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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

  const services = [
    {
      id: '01',
      title: 'Reach a Youthful, Engaged Audience',
      description: "Snapchat is the go-to app for GenZ and young millennials making it ideal for brands looking to connect with a highly active demographic.",
      image: '/images/Reach-a-Youthful-Engaged-Audience.png',
    },
    {
      id: '02',
      title: 'Create Immersive, Interactive Ads',
      description: "From AR lenses and filters to full-screen video ads, Snapchat’s ad formats are designed to engage. These experiences encourage interaction and capture attention. Our team ensures that your ad creatives capture attention and drive conversions, making us one of the top Snapchat ads agency in USA.",
      image: '/images/Create-Immersive-Interactive-Ads.png',
    },
    {
      id: '03',
      title: "Offer Seamless Shopping",
      description: "Snapchat Ads offer integrated shopping features that allow users to browse and purchase products without leaving the app. This creates a smooth, high-conversion shopping experience.",
      image: "/images/Offer-Seamless-Shopping.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}>
          Benefits of Snapchat Ads Management
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles["service-card1"]} relative group rounded-lg p-7 transition-all duration-700   ${styles["box-color"]} transform
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <h3 className={`${styles["video-title"]} text-white ${monsterfont3.className} transition-colors duration-300`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white ${styles["video-description"]}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnapchatServices;