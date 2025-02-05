import React from 'react'
import Navbar from '../navbar/navbar'
import SEOLocalSection from './home'
import LocalServices from './localservices'
import LocalStrategy from './opportunity'
import LocalSEOBenefits from './benefits'
import LocalAudienceSection from './audience'
import SeoResults from './result'
import LocalBusinessSection from './audience2'
import Deliverables from './client'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <SEOLocalSection/>
    <LocalServices/>
    <LocalStrategy/>
    <LocalSEOBenefits/>
    <LocalAudienceSection/>
    <SeoResults/>
    <LocalBusinessSection/>
    <Deliverables/>
    <InsightSection/>
    <Footer/>
    
    </div>
  )
}

export default page
