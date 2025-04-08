'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

const StackCardAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  const cards = [
    { 
      id: 1, 
      title: "Discuss", 
      description: "Our journey begins with a thorough assessment of your current technology infrastructure. We analyze your existing systems, processes, and IT landscape to identify areas that require improvement. The review includes an evaluation of performance bottlenecks, security vulnerabilities, and scalability limitations."
    },
    { 
      id: 2, 
      title: "Define", 
      description: "Based on our findings, we develop a comprehensive strategic plan tailored to your specific needs and business goals. This roadmap outlines the technological changes required, along with timelines and resource allocations."
    },
    { 
      id: 3, 
      title: "Design", 
      description: "Our expert team executes the transformation plan with precision, implementing new systems, migrating data, and optimizing processes while ensuring minimal disruption to your ongoing operations."
    },
    { 
      id: 4, 
      title: "Data Integration", 
      description: "We provide comprehensive training for your team to ensure smooth adoption of new technologies and processes. Our ongoing support ensures that you can maximize the benefits of your transformed digital environment."
    },
    { 
      id: 5, 
      title: "Develop", 
      description: "Digital transformation is not a one-time event but a continuous journey. We establish monitoring mechanisms and feedback loops to help you adapt to changing market conditions and technological advancements."
    },
    { 
      id: 6, 
      title: "Debug", 
      description: "We help integrate the new technologies with your existing business processes, ensuring a seamless transition and maximum benefit realization across departments."
    },
    { 
      id: 7, 
      title: "Deploy", 
      description: "Our advanced analytics tools provide real-time insights into your systems' performance, helping you make data-driven decisions to optimize operations and resource allocation."
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCardPosition = (index) => {
    if (isMobile) return {}; // No sticky positioning on mobile

    const baseOffset = 150; // Starting position for cards
    const cardHeight = 200; // Approximate height of a card
    const cardGap = 300; // Consistent gap between cards (reduced from 500)
    const scrollThreshold = baseOffset + (index * (cardHeight + cardGap));
    
    // Distance to move up before becoming sticky
    const visibilityThreshold = 150;
    
    if (scrollPosition < scrollThreshold - visibilityThreshold) {
      // Card is still below viewport, maintain full offset
      return { transform: `translateY(${scrollThreshold - scrollPosition}px)` };
    } else if (scrollPosition < scrollThreshold) {
      // Card is entering viewport but not yet sticky - gradually move up
      const progress = (scrollThreshold - scrollPosition) / visibilityThreshold;
      return { transform: `translateY(${progress * visibilityThreshold}px)` };
    } else {
      // Card is sticky
      return { transform: 'translateY(0)' };
    }
  };

  const calculateFirstCardOffset = () => {
    if (isMobile) return {}; // No animation on mobile
    
    const maxOffset = 80; // Maximum amount the first card moves up
    const startOffset = 600; // When first card starts moving up
    const endOffset = 1400; // When first card reaches maximum up position
    
    if (scrollPosition < startOffset) {
      return { transform: 'translateY(0)' };
    } else if (scrollPosition > endOffset) {
      return { transform: `translateY(-${maxOffset}px)` };
    } else {
      const progress = (scrollPosition - startOffset) / (endOffset - startOffset);
      return { transform: `translateY(-${progress * maxOffset}px)` };
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 pt-16">
        {/* Left side content - becomes sticky only on desktop */}
        <div className={`md:w-1/2 ${!isMobile ? 'sticky top-32' : ''} h-fit md:pr-12 mb-12 md:mb-0`}>
  <div className="max-w-lg">
    <h2 className={`text-[26px] leading-[32px] ${monsterfont.className}  text-white mb-4 text-center`}>
      7 D's OF 
    </h2>
    <h2 className={`text-[30px] leading-[32px] ${monsterfont.className}  text-white mb-4 text-center`}>
      MACHINE LEARNING
    </h2>
    <p className="text-[16px] leading-[24px] font-[500] font-helveticaneue text-semi-white text-center">
    At AlgorithmX, our AI and Machine Learning solutions are designed to empower businesses with intelligent, data-driven capabilities. We specialize in building predictive models, natural language processing systems, and computer vision applications tailored to real-world challenges. From collecting and cleaning large datasets to training, evaluating, and deploying models, our end-to-end approach ensures high accuracy, scalability, and performance. By integrating AI/ML into core operations, we help organizations automate processes, uncover insights, and drive smarter decision-making across industries.
    </p>
  </div>
</div>

        
        {/* Right side with stacking cards */}
        <div className="md:w-1/2 relative md:pt-32 pb-32">
          <div className="pt-16">
          {cards.map((card, index) => (
  <div
  key={card.id}
  className={`relative backdrop-blur-md bg-[#2a0e61]/70 border border-green-400/30 rounded-3xl p-8 shadow-xl w-full h-[340px] 
    ${index !== cards.length - 1 ? 'mb-[40px]' : ''} 
    overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02]
    ${!isMobile ? 'sticky top-[150px]' : ''}`}
  style={calculateCardPosition(index)}
>
  {/* Enhanced green glow overlay */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00ffcc]/25 via-[#00ffcc]/15 to-transparent opacity-80 pointer-events-none z-0" />

  {/* Brighter green grid texture */}
  <div className="absolute inset-0 bg-[radial-gradient(#00ffcc55_1px,transparent_1px)] bg-[size:22px_22px] opacity-20 pointer-events-none rounded-3xl z-0" />

  <h2 className="text-[24px] leading-[28px]  font-[700] text-white font-helveticaneue mb-4 z-10 relative">{card.title}</h2>
  <p className="text-[16px] leading-[20px]  font-[500]  font-helveticaneue text-semi-white z-10 relative">{card.description}</p>
</div>


))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCardAnimation;