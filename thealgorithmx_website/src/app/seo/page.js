import React from 'react'
import Navbar from '../navbar/navbar'
import SEOSection from './home'
import SeoServices from './services'
import SEOServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from './experience'
import ServicesGrid from './benefits'
import SEOTechnologyToolbox from './seotoolbox'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <SEOSection/>
      <SeoServices/>
      <SEOServicesSection/>
      <UnlockSuccess/>
      <ResponsiveHero/>
      <ServicesGrid/>
      <SEOTechnologyToolbox/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
