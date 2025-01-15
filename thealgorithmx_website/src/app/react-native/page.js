import React from 'react';
import NativeSection from './home';
import AppGrid from '../android-app/multiface';
import NativeServicesGrid from './ndevelopment';
import TechGrid from '../android-app/technologies';
import NativeDevelopmentTimeline from './ndynamictimeline';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight';
import Footer from '../company/footer';

const page = () => {
  return (
    <div>
    <NativeSection/>
    <AppGrid/>
    <NativeServicesGrid/>
    <TechGrid/>
    <NativeDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>

    </div>
  )
}

export default page
