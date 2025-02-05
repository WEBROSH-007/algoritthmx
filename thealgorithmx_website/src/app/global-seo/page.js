import React from 'react'
import Navbar from '../navbar/navbar'
import SEOGlobalSection from './home'
import GlobalServices from './globalservices'
import GlobalStrategy from './expandopp'
import GlobalSEOBenefits from './benefits'
import GlobalTargetingSection from './targeting'
import GlobalRevenueSection from './revenue'
import GlobalReachSection from './ready'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
    <Navbar/>
    <SEOGlobalSection/>
    <GlobalServices/>
    <GlobalStrategy/>
    <GlobalSEOBenefits/>
    <GlobalTargetingSection/>
    <GlobalRevenueSection/>
    <GlobalReachSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
