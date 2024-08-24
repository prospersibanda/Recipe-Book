// src/components/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SearchResults.css'; // Add this file for custom styles

const SearchResults = () => {
  const { query } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, [query]);

  if (!recipes) return <div className="loading">Loading...</div>;

  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      <div className="recipe-slider">
        <Slider infinite={true} slidesToShow={3} slidesToScroll={1} autoplay={true} autoplaySpeed={2000} pauseOnHover={true}>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="slider-item">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strMeal}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SearchResults;
