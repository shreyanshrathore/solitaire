import React from 'react'
import Nav from '../components/Nav'
import LandingCard, { Gallery } from '../components/Project/LandingCard'
import {Status} from '../components/Project/LandingCard'
import {Overview} from '../components/Project/LandingCard'


const ProjectPage = () => {
  return (
    <div>
      <LandingCard/>
      <Status />
      <Overview/>
      <Gallery/>

    </div>
  )
}

export default ProjectPage