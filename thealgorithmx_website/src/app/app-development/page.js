import React from 'react'
import Navbar from '../navbar/navbar'
import MobileSection from './home'
import MobileAppServices from './services'
import BenefitsSection from './benefits'
import AppDevelopmentProcess from './devlop'
import Accordion from './practices'
import CostMob from './cost'
import AppTechStack from './techstack'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
    <Navbar/>
    <MobileSection/>
    <MobileAppServices/>
    <BenefitsSection/>
    <AppDevelopmentProcess/>
    <Accordion/>
    <CostMob/>
    <AppTechStack/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
