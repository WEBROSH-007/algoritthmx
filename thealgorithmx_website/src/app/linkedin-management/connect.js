import React from 'react';
import { Montserrat } from 'next/font/google';
const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"100",
})


const LinkedinHeroSection = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1  ">
            <h1 className={`${monsterfont1.className} leading-[52px] tracking-[0.06em] text-[46px] mt-[20px] `}>
            CONNECT & ENGAGE
            </h1>
            <div className="w-[35px] h-[2px] bg-blue-500  mt-[35px] mb-[32px]"></div>
            <p className="text-semi-white text-[16px] leading-[26px] font-[300] font-['Helvetica']">
            LinkedIn is designed for professional networking and industry engagement, offering tools like LinkedIn Groups, resources, Sales Navigator, and collaborative articles. These features create spaces for sharing industry insights, staying updated on news, and connecting with potential clients. Engaging in these areas fosters meaningful conversations and opens doors to collaboration.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="transform md:rotate-12">
              <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white ">
                <img
                  src="images/Connect-&-Engage.webp"
                  alt="Network diagram showing audience connection"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinHeroSection;
