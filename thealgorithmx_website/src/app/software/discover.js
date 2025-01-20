'use client'
import React, {useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
import styles from '../crm/style.module.css';
import style from './style.module.css';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
});
const monsterfont3 = Montserrat({
  subsets: ['latin'],
  weight: '100',
});
const crmServices = [
  {
    id: 1,
    title: 'SOFTWARE CONSULTING  ',
    subtitle :'SOFTWARE CONSULTING SERVICES',
    icon: '🏆',
    content: 'As a leading custom software development company, we carefully evaluate your business needs, design software structures and guarantee maximum development benefits to you. Our dedicated software developers in USA use their technical knowledge and skills to deliver tailored software solutions that improve operational efficiency and increase productivity.'
  },
  {
    id: 2,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    subtitle :'CUSTOM SOFTWARE DEVELOPMENT SERVICES',
    icon: '📋',
    content: ' Achieve the expected level of business competence in the current competitive market landscape, custom software development plays a crucial role in achieving optimal business efficiency. AlgorithmX offers the best custom software development service in USA, delivering custom software solutions designed for your particular business needs.'
  },
  {
    id: 3,
    title: 'ENTERPRISE SOFTWARE DEVELOPMENT ',
    subtitle :'ENTERPRISE SOFTWARE DEVELOPMENT SERVICES',
    icon: '⚙️',
    content: 'As a notable agency in custom software development, we focus on helping companies achieve lasting success by using our bespoke enterprise software development services and solutions ranging from simple to complex ones. Our software development consulting services aim to expand your business infrastructure simultaneously improving other critical areas of your organization.'
  },
  {
    id: 4,
    title: 'SOFTWARE PRODUCT DEVELOPMENT ',
    subtitle :'SOFTWARE PRODUCT DEVELOPMENT SERVICES',
    icon: '📊',
    content: 'Our software product development company provides a range of services to assist you in all aspects of custom software application development, including everything from market research and business analysis to overseeing development, deployment, and post-launch maintenance. We deliver our clients secure, compliant, and high-end solutions that precisely meet their needs as we are experts in development consulting, architecture and product design, and compliance management.'
  },
  {
    id: 5,
    title: 'SOFTWARE INTEGRATION  ',
    subtitle :'SOFTWARE INTEGRATION SERVICES',
    icon: '💻',
    content: 'When a company adopts a new technology it may face obstacles with its current systems. Our specialized team of software developers utilizes advanced methods and technologies to tackle any issues related to implementation and integration of software covering optimization, testing and design.'
  },
  {
    id: 6,
    title: 'CUSTOM CRM DEVELOPMENT ',
    subtitle :'CUSTOM CRM DEVELOPMENTT SERVICES',
    icon: '🚀',
    content: 'At our custom software development company, we offer outstanding CRM software development for streamlining your business processes, improving customer relationships, and boosting the effectiveness of your business operations.'
  },
  {
    id: 7,
    title: 'API DEVELOPMENT',
    subtitle :'API DEVELOPMENT SERVICES',
    icon: '📱',
    content: 'In our offshore software development services, our team provides API development and integration solutions to enhance the connectivity of your software applications with your customers and vendor partners, increasing revenue generation.'
    },

];

const   SoftwareServices = () => {
  const [hoveredService, setHoveredService] = useState(crmServices[0]);
  const [activeService, setActiveService] = useState(crmServices[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceInteraction = (service) => {
    if (isMobile) {
      setActiveService(service);
    } else {
      setHoveredService(service);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
  <h1
    className={`${style["discover-text"]} ${monsterfont.className} mb-4 md:mb-0  text-center `}
  >
   Discover our End-to-End
  </h1>
  <h1
    className={`${style["discover-text"]} ${monsterfont3.className} mb-8 md:mb-16 text-center max-w-3xl mx-auto`}
  >
  Software Development Services
  </h1>

  <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
    {/* Services list */}
    <div
          className={`
            ${isMobile ? 'overflow-x-auto' : 'md:w-1/3 md:h-[300px] md:overflow-y-auto'}
            md:p-6 ${!isMobile && ' border-red-700'} pr-4 mt-2
            ${styles["crm-scrollbar"]}
          `}
        >
      <div className={`${isMobile ? 'flex space-x-0 min-w-max' : 'space-y-2'} ${styles["crm-scrollbar"]}`}>
        {crmServices.map((service) => (
          <div
            key={service.id}
            className={`
              cursor-pointer transition-all duration-300
              ${isMobile ? 'flex-shrink-0 min-w-[100px]' : 'w-full'}
              ${(isMobile ? activeService.id === service.id : hoveredService.id === service.id)
                ? styles["box-border"]
                : "border-black"}
            rounded
            `}
            onClick={() => isMobile && handleServiceInteraction(service)}
            onMouseEnter={() => !isMobile && handleServiceInteraction(service)}
          >
            <div
              className={`flex items-center md:pl-8 inline-block ${
                isMobile ? 'flex-col items-start' : ''
              }`}
            >
              <span className="md:mr-6">{service.icon}</span>
              <span className={`${styles["left-text"]} ${monsterfont2.className}`}>
                {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Content section */}
    <div className={`md:w-2/3 ${!isMobile && 'md:pl-[100px]'} mt-6 md:mt-0`}>
    <div
  className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[410px] md:h-[300px]`}
>

        <h2 className={`${styles["right-title"]} ${monsterfont.className}`}>
          {isMobile ? activeService.title : hoveredService.title}
        </h2>
        <p className={`${styles["right-description"]} text-semi-white`}>
          {isMobile ? activeService.content : hoveredService.content}
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default SoftwareServices;
