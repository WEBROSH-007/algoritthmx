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

const LinkedinServices = () => {
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
      title: 'Precise Targeting',
      description: "Our LinkedIn ads management services focus on reaching the right audience. We use detailed targeting options to ensure your ads are seen by professionals who are most likely to engage, driving better-quality leads.",
      image: '/images/Precise-Targeting.png',
    },
    {
      id: '02',
      title: 'Enhanced Brand Visibility',
      description: 'Enhance your brand’s presence within a professional network. As a LinkedIn marketing services provider, we position your company in front of industry leaders and key decision-makers, boosting credibility and visibility.',
      image: '/images/Enhanced-Brand-Visibility.png',
    },
    {
      id: '03',
      title: ' Professional Networking Opportunities',
      description: "LinkedIn is not just a platform for ads—it's a hub for professional networking. Through targeted ads, you can foster valuable business relationships, partnerships, and collaborations that fuel growth.",
      image: '/images/Professional-Networking-Opportunities.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}>
          Benefits of Linkedin Ads Management
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

export default LinkedinServices;