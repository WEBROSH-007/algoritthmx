import React from 'react'
import Navbar from '../navbar/navbar'
import MediaSection from './home'
import WhatSection from './what'
import SocialMediaAudit from './key'
import SocialCommitment from './commitment'
import ComplimentarySection from './complimentary'
import Accordion from './chosee'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <MediaSection/>
    <WhatSection/>
    <SocialMediaAudit/>
    <SocialCommitment/>
    <ComplimentarySection/>
    <Accordion/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
