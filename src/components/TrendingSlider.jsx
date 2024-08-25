import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/trendingSlider.css'  // Updated path for TrendingSlider CSS

const TrendingSlider = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      const data = await api.json();
      setData(data.meals)
    }
    fetchData();
  }, [])

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className='slider-item'>
              <img src={d.strMealThumb} alt={d.strMeal} />
              <div className="slider-item-info">
                <h3>{d.strMeal}</h3>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default TrendingSlider
