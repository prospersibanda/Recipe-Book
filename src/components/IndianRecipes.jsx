// src/components/IndianRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Add this file for custom styles

const IndianRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="category-page">
      <h1>Indian Recipes</h1>
      <div className="recipe-slider">
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <Link to={`/${recipe.idMeal}`} key={recipe.idMeal}>
              <div className="slider-item">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p>{recipe.strMeal}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default IndianRecipes;
