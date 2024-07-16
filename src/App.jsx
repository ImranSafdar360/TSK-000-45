/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientSection from './components/ClientSection'
import Community from './components/Community'
import Experience from './components/Experience'
import Business from './components/Business'
import ExperienceImage from './assets/experience-svg.svg'
import MobileLogin from './assets/mobile-login.svg'
import Customer from './components/Customer'
import BlogSection from './components/BlogSection'
import Demo from './components/Demo'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App flex flex-col justify-center items-center gap-[40px]'>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <Community />
      <Experience  svg={ExperienceImage} title={"The unseen of spending three years at Pixelgrade"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."}/>
      <Business />
      <Experience svg={MobileLogin} title={"How to design your site footer like we did"} desc={"Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."}/>
      <Customer />
      <BlogSection />
      <div className='w-full'>
      <Demo />
      <Footer />
      </div>
    </div>
  )
}

export default App
