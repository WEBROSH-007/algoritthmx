import React from 'react';
import Navbar from '../navbar/navbar'
import IosSection from './home';
import AppGrid from '../android-app/multiface';
import IosServicesGrid from './idevelopment';
import IosDevelopmentTimeline from './dynamictimeline';
import TechGrid from '../android-app/technologies';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <IosSection/>
      <AppGrid/>
      <IosServicesGrid/>
      <TechGrid/>
      <IosDevelopmentTimeline/>
      <IndustriesGrid/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
