import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './popularSlider'
import TredingSlider from './TrendingSlider'

const Home = () => { 
  return (
    <>
      <div className="main">
        <PopularSlider />
        <TredingSlider />
      </div>
    </>
  )
}

export default Home