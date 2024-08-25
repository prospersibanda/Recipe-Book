import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/PopularSection.css'  // Path for PopularSection CSS

const PopularSection = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      const data = await api.json();
      setData(data.meals)
    }
    fetchData();
  }, [])

  return (
    <div className="popular-section-container">
      {data.slice(0, 6).map((d) => (
        <div className="popular-item" key={d.idMeal}>
          <Link to={`/${d.idMeal}`}>
            <img src={d.strMealThumb} alt={d.strMeal} className="popular-image" />
            <div className="popular-info">
              <h3 className="popular-title">{d.strMeal}</h3>
              <p className="popular-description">Delicious and popular choice among food lovers. Try this recipe to experience its unique flavor and taste!</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularSection
