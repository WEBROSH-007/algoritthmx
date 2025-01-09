import React from 'react';
import './styless.css';
const InsightSection = () => {
  return (
    <div className="w-full bg-black mx-auto px-4 py-6">
      <div className="relative bg-black rounded-3xl border border-gray-800 overflow-visible max-w-6xl mx-auto">
        {/* Purple accent line - positioned absolute and extending outside */}
        <div className="purple-line" />
        
        {/* Content container */}
        <div className="flex flex-col md:flex-row text-center md:items-center justify-between p-6 md:p-8 gap-4 md:gap-8">
          {/* Text content */}
          <div className="flex flex-col md:flex-row  md:items-start md:items-center gap-4 md:gap-14">
            <h2 className="text-white insight whitespace-nowrap">
              Get an Insight
            </h2>
            <div className=' md:text-start'>
            <p className="text-semi-white insight-description max-w-[700px]">
              We assure you the consultation is completely free. Let us understand the depths of your Idea and get the suggestion on how you can proceed further about growing it.
            </p>
            </div>
          </div>
          
          {/* Connect button */}
          <button className="px-6 py-2 bg-black border border-gray-700 rounded-full text-white text-sm md:text-base hover:bg-gray-900 transition-colors whitespace-nowrap">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;