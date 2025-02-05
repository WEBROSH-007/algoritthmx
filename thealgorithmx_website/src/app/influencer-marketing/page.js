import React from 'react'
import Navbar from '../navbar/navbar'
import InfluencerSection from './home'
import InfluencerMasterySection from './influencer'
import InfluencerModules from './services'
import EssentialSection from './marketing'
import DecodeSection from './decode'
import WhoStrategy from './who'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <InfluencerSection/>
      <InfluencerMasterySection/>
      <InfluencerModules/>
      <EssentialSection/>
      <DecodeSection/>
      <WhoStrategy/>
      <InsightSection/>
      <Footer/>
      
    </div>
  )
}

export default page
