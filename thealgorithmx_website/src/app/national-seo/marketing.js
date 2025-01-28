    import React from 'react';

    const NationalMarketingSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Search-Marketing-Team.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className="text-xl lg:text-3xl font-bold">
                A Full-Service Search Marketing Team to Drive National Success
                </h1>
                
                <p className="text-gray-300 text-md">
                Ready to transform your business into a nationwide powerhouse? Our National SEO services can help you elevate your brand’s
                visibility across the country, drive targeted traffic, and leave competitors behind.
                </p>
                <p className="text-gray-300 text-md">
                Whether you need a dedicated national SEO expert in India or the best national SEO agency in the USA, we have the expertise and
                tailored strategies to get you to the top. With expertise as a leading technical SEO audit consultancy in the USA, we provide 
                actionable strategies for SEO improvement. As a technical SEO specialist, we deliver customized SEO technical audits, especially
                for businesses seeking services in California or nationwide.
                </p>
                <p className="text-gray-300 text-md">
                As your national SEO company, we connect your business with the right audience across the country. Our full-service nationwide
                SEO services ensure your brand ranks higher, attracts more customers, and grows into a national leader.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default NationalMarketingSection;