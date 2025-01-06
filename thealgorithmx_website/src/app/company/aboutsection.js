import React from 'react';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"200",
})
const AboutSection = () => {
  return (
    <section className="relative w-full bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className={` font-size-60 md:font-size-84 algo-line-height-64 ${monsterfont.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
          About Us
        </h1>
        
        <p className={`algo-line-height-34  font-size-34 ${monsterfont.className} text-gray-400 leading-relaxed `}>
          Transforming businesses with  personalized
          <br/>
          strategies, cutting-edge tech, and measurable results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
