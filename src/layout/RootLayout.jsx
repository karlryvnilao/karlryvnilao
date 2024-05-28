import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sticky from '../components/Sticky'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Projects from '../pages/Projects'
import Tooling from '../pages/Tooling'
import Training from '../pages/Trainings'

const Root = () => {
  return (
    <div >
    <Navbar/>
    <Sticky/>
    <About/>
    <Training/>
    <Portfolio/>
    <Projects/>
    <Tooling/>
    <Outlet/> {/** eto yun element props sa Route */}
    <Footer/>
    </div>
  )
}


export default Root
