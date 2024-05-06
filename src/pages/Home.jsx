import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import OurTeam from '../components/OurTeam'
import Testimonials from '../components/Testimonials'
import Enroll from '../components/Enroll'
import ClassEnroll from '../components/ClassEnroll'
import Alumni from '../components/Alumni'
import Choose from '../components/Choose'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <Enroll />
        <OurTeam />
        <ClassEnroll />
        <Testimonials />
        <Alumni />
        <Choose />
        <Contact />
        <Footer />
    </>
  )
}

export default Home