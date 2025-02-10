import React from 'react'
import Navbar from '../navbar/navbar'
import GoogleAds from './home'
import Targeted from './targeted'
import ServicesAccordion from './services'
import ResponsiveExperience from './experience'
import TechnologyToolbox from './toolbox'
import GoogleServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
    <GoogleAds/>
    <Targeted/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <GoogleServices/>
    <InsightSection/>
    <Footer/>

    </div>
  )
}

export default page
