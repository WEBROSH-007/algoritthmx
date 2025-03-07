import React from 'react'
import Navbar from '../navbar/navbar'
import WebSection from './home'
import WebAppServices from './services'
import BenefitsWebSection from './benefits'
import WebDevelopmentProcess from './devlop'
import WebAccordion from './best'
import CostWeb from './cost'
import WebTechStack from './techstack'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <WebSection/>
    <WebAppServices/>
    <BenefitsWebSection/>
    <WebDevelopmentProcess/>
    <WebAccordion/>
    <CostWeb/>
    <WebTechStack/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
