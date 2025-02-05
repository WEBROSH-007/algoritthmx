import React from 'react'
import Navbar from '../navbar/navbar'
import YoutubeSection from './home'
import YoutubeHeroSection from './increase'
import YoutubeGrowHeroSection from './connect'
import YoutubeSmoothScrollStack from './solutions'
import YoutubeServicesGrid from './help'
import YoutubeBusinessSection from './need'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <YoutubeSection/>
    <YoutubeHeroSection/>
    <YoutubeGrowHeroSection/>
    <YoutubeSmoothScrollStack/>
    <YoutubeServicesGrid/>
    <YoutubeBusinessSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
