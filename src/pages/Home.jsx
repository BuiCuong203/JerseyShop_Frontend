import React from 'react'
import Slider from '../components/Slider'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import EmptyCart from '../components/EmptyCart'

const Home = () => {
  return (
    <div>
      <Slider />
      <LastestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}

export default Home
