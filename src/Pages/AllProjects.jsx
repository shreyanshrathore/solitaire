import React from 'react'
import Nav from '../components/Nav'
// import LandingCard from '../components/AllProjects/LandingCard'
import Search from '../components/AllProjects/Search'
import Projects from '../components/AllProjects/Projects'
import Footer from '../components/1]firstPage/Footer'
import bg from "../assets/AllProjects/allprojectsbg.png";
import LandingCard from '../components/Project/LandingCard'

const item = {
  bg: bg,
  heading: "Projects"
}
const AddlProjects = () => {
  return (
    <div className='pt-28'>
        {/* <Nav/> */}
        <LandingCard item = {item}/>
        <Search/>
        <Projects/>
        {/* <Footer/> */}
    </div>
  )
}

export default AddlProjects