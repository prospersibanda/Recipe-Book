import React from 'react'
import Navbar from './Navbar'
import PopularSection from './popularSection'  // Renamed to reflect the new component
import TrendingSlider from './TrendingSlider'
import '../Styles/Home.css'  // Updated path for Home CSS
import Footer from './Footer'

const Home = () => { 
  return (
    <>
      <div className="main">
        <section className="section popular-section">
          <h2 className="section-heading">Popular Recipes</h2>
          <p className="section-description">Explore some of the most popular recipes that are loved by many. From classic favorites to new discoveries, find recipes that are trending and loved by food enthusiasts.</p>
          <PopularSection />
        </section>
        <section className="section trending-section">
          <h2 className="section-heading">Trending Recipes</h2>
          <p className="section-description">Check out the latest trending recipes that are gaining popularity. Discover what’s new and exciting in the culinary world!</p>
          <TrendingSlider />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default Home
