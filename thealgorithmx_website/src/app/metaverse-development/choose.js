'use client'
import React, { useState } from 'react';
import { Award, Link, Layers, Shield } from 'lucide-react';
import Image from 'next/image';

const MetaverseDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Deeply experienced team',
      description: 'Our experience is informed by a number of successful virtual reality projects for Fortune 500 companies, startups, and everyone in between.',
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Innovation focused',
      description: 'Our global team of experienced, certified consultants and developers is well-versed with the latest tools, technologies, and platforms.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Dedicated OSDC',
      description: 'We meet you where you are with our dedicated global open science data cloud, available on-site, near-shore, off-shore, or as a hybrid model.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Flexible engagement models',
      description: 'Our partnership with you is completely flexible – scale teams up and down as you need, or opt for a fixed cost or T&M model.',
     image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose AlgorithmX as Your IoT Development Company?
        </h1>
        <p className="text-gray-300 mb-8">
          As a trusted IoT application development company, we have proven ourselves as the leading IoT application development company by providing user-centric applications for top brands. Being a premium IoT software development company, we focus on bridging the gap between the real and digital world and providing our clients with the most innovative and usable IoT environment.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Mobile & Desktop Left Section - Clickable Items */}
          <div className="md:w-1/3 space-y-4   rounded-[20px]">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === key 
                    ? ' text-white ' 
                    : 'bg-transparent text-semi-white '
                }`}
              >
                {section.icon}
                <span className="font-semibold">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop Right Section - Description with Image */}
          <div className="hidden md:grid md:w-2/3 rounded-lg p-8 grid-cols-2 gap-8">
            <div className="w-full h-[200px] relative">
              <Image 
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                fill
                className="object-cover rounded-lg w-full]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-2xl font-bold">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-gray-300">
                {sections[activeSection].description}
              </p>
            </div>
          </div>

          {/* Mobile Description Section */}
          <div className="md:hidden">
            <div className=" border-[1px] border-blue-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-xl font-bold">{sections[activeSection].title}</h2>
              </div>
              <p className="text-gray-300">{sections[activeSection].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaverseDevelopmentPage;