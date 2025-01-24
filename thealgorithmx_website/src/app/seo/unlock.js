'use client'
import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UnlockSuccess = () => {
  const [percentages, setPercentages] = useState([68, 75, 54, 49]);
  const [visiblePercentages, setVisiblePercentages] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationInterval = setInterval(() => {
        setVisiblePercentages(prev => 
          prev.map((current, index) => 
            current < percentages[index] 
              ? Math.min(current + 5, percentages[index]) 
              : current
          )
        );
      }, 50);

      return () => clearInterval(animationInterval);
    }
  }, [isVisible, percentages]);

  return (
    <div className="bg-black text-white py-12 px-6 flex flex-col items-center min-h-screen justify-center" ref={componentRef}>
      <div className='max-w-[1200px] mx-auto '>
      <h1 className="text-3xl font-bold text-center mb-8">UNLOCK UNPRECEDENTED SUCCESS WITH SEO</h1>
      <p className="text-center mb-8">94% of SERP clicks go to organic results. Is your site capturing that traffic?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        {visiblePercentages.map((percentage, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: '#3b82f6',
                  textColor: '#fff',
                  trailColor: '#1e293b',
                })}
              />
            </div>
            <p className="text-center">{[
              '68% of online experiences are initiated by search engines such as Google.',
              '75% of people who perform searches do not look beyond the first page of search results.',
              '53.3% of the entire website traffic comes from organic search.',
              'For higher return on investment, 49% of marketers opt for organic search.'
            ][index]}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UnlockSuccess;