import React, { useState } from 'react'
import Nav from '../components/Nav'
// import LandingCard from '../components/AllProjects/LandingCard'
import Search from '../components/AllProjects/Search'
import Projects from '../components/AllProjects/Projects'
import Footer from '../components/1]firstPage/Footer'
import bg from "../assets/AllProjects/allprojectsbg.png";
import LandingCard from '../components/Project/LandingCard'

import projects from '../components/AllProjects/allproject.json'

const item = {
  bg: bg,
  heading: "Projects",
  projects: projects
}

const AddlProjects = ({setInfo}) => {
  const [query, setQuery] = useState(null);
  return (
    <div className='pt-28'>
        {/* <Nav/> */}
        <LandingCard item = {item}/>
        <Search query = {query} setQuery = {setQuery}/>
        <Projects projects = {projects} setInfo = {setInfo} query = {query} />
        {/* <Footer/> */}
    </div>
  )
}

export default AddlProjects