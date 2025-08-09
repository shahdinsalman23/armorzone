import React from 'react'
import AboutOurCompany from "../components/AboutOurCompany"
import Brand from '../components/Brand'
import Testimonials from '../components/Testimonials'
import InnerBanner from '../components/InnerBanner'

const About = ({ aboutSection, brandSec, testimonails }) => {
  return (
    <>
      <div className="aboutus-pg">
        <InnerBanner title="About Us"/>
        <AboutOurCompany aboutSection={aboutSection} />
        <Brand brandSec={brandSec} />
        <Testimonials testimonails={testimonails} />
      </div>
    </>
  )
}

export default About
