import React from 'react';
import Navbar from '../navbar/navbar';
import BackEndSection from './home';
import HeroSection from './consistency';
import BackEndTechStack from './btechstack'
import BackDesignProcess from './bdynamic';
import BackServicesGrid from './backdevelopment';
import BackWebDevServices from './bfullscale';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <BackEndSection/>
      <BackServicesGrid/>
      <HeroSection/>
      <BackEndTechStack/>
      <BackDesignProcess/>
      <BackWebDevServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
