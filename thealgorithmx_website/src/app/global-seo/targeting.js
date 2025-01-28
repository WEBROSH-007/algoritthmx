    import React from 'react';

    const GlobalTargetingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Precise-Targeting-with-Custom-Strategy.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className="text-xl lg:text-3xl font-bold">
                Precise Targeting with Custom Strategy
                </h1>
                
                <p className="text-gray-300 text-md">
                Choose AlgorithmX for International SEO and gain a customized strategy tailored for each market. Our approach uses
                targeted keywords and culturally relevant content to connect your brand with the right audience. With extensive experience
                and cutting-edge tools, we optimize every aspect of international SEO—from technical SEO and multilingual content to specialized
                keyword research—allowing you to focus on growth. Transparency is at our core; expect detailed reports on keyword rankings,
                traffic growth, and revenue, so you’re always informed of your site’s global success. Understanding each market’s unique
                demographics and cultural nuances helps us anticipate and meet audience needs, ensuring your brand resonates internationally.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default GlobalTargetingSection;