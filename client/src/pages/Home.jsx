import React from 'react'
import Carousel from '../components/Slider/Carousel'
import GreatDeals from '../components/greatdeals/GreatDeals'

const Home = () => {
  return (
    <div className='home'>
      <Carousel/>
      <GreatDeals />
      
    </div>
  )
}

export default Home