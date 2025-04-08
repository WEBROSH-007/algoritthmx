import React from 'react'
import Navbar from '../navbar/navbar'
import TestingSection from './home'
import TestingServices from './testing'
import QAProcessDiagram from './quality'
import TestingChoosePage from './choose'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <TestingSection/>
    <TestingServices/>
    <QAProcessDiagram/>
    <TestingChoosePage/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
