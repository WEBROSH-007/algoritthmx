import React from 'react'
import Navbar from '../navbar/navbar'
import SEONationalSection from './home'
import NationalServices from './nationalservices'
import NationalStrategy from './opportunity'
import NationalSEOBenefits from './benefits'
import NationalMarketingSection from './marketing'
import NationalRevenueSection from './revenue'
import NationalRiseSection from './rise'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
    <Navbar/>
    <SEONationalSection />
    <NationalServices />
    <NationalStrategy/>
    <NationalSEOBenefits />
    <NationalMarketingSection />
    <NationalRevenueSection />
    <NationalRiseSection />
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
