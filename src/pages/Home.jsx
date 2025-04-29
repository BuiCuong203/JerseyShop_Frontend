import React from 'react'
import Slider from '../components/Slider'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import ListCategory from '../components/ListCategory'

const Home = () => {
  return (
    <div>
      <Slider />
      <LastestCollection />
      <ListCategory />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}

export default Home
