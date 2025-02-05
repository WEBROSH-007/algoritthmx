    import React from 'react';
    import { Montserrat } from 'next/font/google';
                    
                    const monsterfont = Montserrat({
                      subsets: ['latin'],
                      weight: '400',
                    });


    const AmazonReachSection  = () => {
    return (
        
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className={`text-[36px] leading-[1.1] ${monsterfont.className} `}>
                We Share Your Amazon Ambitions
                </h1>

                <p className={`text-[16px] leading-[22px] font-[Helvetica] text-semi-white`}>
                Whether you’re building a strong brand or focused on increasing revenue, we’re here to help achieve your Amazon goals. Our approach combines comprehensive strategies with a targeted focus on your unique selling objectives, aligning our success with yours—when you thrive, so do we.
                </p>
                
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                src="images/We-Share-Your-Amazon-Ambitions.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AmazonReachSection;
