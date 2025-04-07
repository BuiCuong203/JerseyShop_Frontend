import React from 'react'
import Hero from '../components/Hero'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newletterbox from '../components/Newletterbox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LastestCollection />
      <BestSeller />
      <OurPolicy />
      <Newletterbox />
    </div>
  )
}

export default Home
