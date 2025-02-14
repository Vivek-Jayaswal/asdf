import React from 'react'
import LandingPage from './LandingPage'
import AboutUs from './AboutUs'
import Services from './Services'
import OurWork from './OurWork'
import ClientReview from './ClientReview'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div>
        <LandingPage />
        <AboutUs />
        <Services />
        <OurWork />
        <ClientReview />
        <Contact />
    </div>
  )
}

export default HomePage