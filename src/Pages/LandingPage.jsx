import React from 'react'
import Nav from '../components/Nav'
import Landing from '../components/1]firstPage/Landing'
import OurMission from '../components/1]firstPage/OurMission'
import ThreeCards from '../components/1]firstPage/ThreeCards'
import Credai from '../components/1]firstPage/Credai'
import OurOfferings from '../components/1]firstPage/OurOfferings'
import FeaturedProject from '../components/1]firstPage/FeaturedProject'
import OurBiggest from '../components/1]firstPage/OurBiggest'
import OurCustomer from '../components/1]firstPage/OurCustomer'
import WantMore from '../components/1]firstPage/WantMore'
import Footer from '../components/1]firstPage/Footer'

const LandingPage = () => {
  return (
    <div>
        <Nav/>
        <Landing/>
        <OurMission/>
        <ThreeCards/>
        <Credai/>
        <OurOfferings/>
        <FeaturedProject/>
        <OurBiggest/>
        <OurCustomer/>
        <WantMore/>
        <Footer/>
    </div>
  )
}

export default LandingPage