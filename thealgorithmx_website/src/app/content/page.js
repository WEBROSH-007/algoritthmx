import React from 'react'
import Navbar from '../navbar/navbar';
import ContentSection from './home'
import DigitalSolutions from './innovative'
import Services from './services'
import ContentDevelopmentProcess from './craftmanship'
import ContentFeatures from './importance'
import ServicesSection from './growth'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
        <ContentSection />
        <DigitalSolutions />
        <Services />
        <ContentDevelopmentProcess />
        <ContentFeatures />
        <ServicesSection/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
