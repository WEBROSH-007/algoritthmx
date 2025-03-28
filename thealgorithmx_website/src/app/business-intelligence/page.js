import React from 'react'
import Navbar from '../navbar/navbar'
import BusinessIntelligenceSection from './home'
import BiConsultingPage from './services'
import BusinessModules from './decision'
import BusinessDevelopment from './offer'
import IndustriesGrid from '../branding/industries'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <BusinessIntelligenceSection />
        <BiConsultingPage/>
        <BusinessModules/>
        <BusinessDevelopment/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
