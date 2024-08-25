// src/components/AmericanRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Ensure this file contains the updated styles

const AmericanRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American');
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, []);

  // Placeholder descriptions for each dish (use actual descriptions from API or database)
  const getDescription = (name) => {
    switch (name) {
      case 'Burger':
        return 'A classic American burger with juicy beef patty, lettuce, tomato, and cheese.';
      case 'Pizza':
        return 'A delicious pizza with a crispy crust, savory tomato sauce, and a blend of cheeses.';
      case 'Hot Dog':
        return 'An iconic American hot dog topped with mustard, ketchup, and relish.';
      default:
        return 'A flavorful American dish with rich ingredients and unique preparation.';
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="category-page">
      <h1 className="category-heading">American Recipes</h1>
      <div className="recipe-slider">
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <Link to={`/${recipe.idMeal}`} key={recipe.idMeal} className="slider-link">
              <div className="slider-item">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="slider-image" />
                <div className="slider-content">
                  <h2 className="slider-title">{recipe.strMeal}</h2>
                  <p className="slider-description">
                    {getDescription(recipe.strMeal)}
                  </p>
                  <p className="slider-info">
                    <strong>Category:</strong> American<br />
                    <strong>Area:</strong> United States
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AmericanRecipes;
