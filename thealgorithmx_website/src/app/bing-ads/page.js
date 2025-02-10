import React from 'react'
import Navbar from '../navbar/navbar'
import BingAds from './home'
import Targeted from './transform'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import BingServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
    <Navbar/>
    <BingAds/>
    <Targeted/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <BingServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
