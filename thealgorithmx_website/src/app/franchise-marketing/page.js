import React from 'react'
import Navbar from '../navbar/navbar'
import FranchiseSection from './home'
import FranchiseServices from './services'
import FranchiseStrategy from './who'
import FranchiseEnterprise from './enterprise'
import EssentialSection from './essential'
import FranchiseProcessVisualization from './process'
import ElevateSection from './elevate'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
        <FranchiseSection/>
        <FranchiseServices/>
        <FranchiseStrategy/>
        <FranchiseEnterprise/>
        <EssentialSection/>
        <FranchiseProcessVisualization/>
        <ElevateSection/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
