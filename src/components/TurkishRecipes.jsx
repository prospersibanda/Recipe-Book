// src/components/TurkishRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Ensure this file contains the updated styles

const TurkishRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Turkish');
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, []);

  // Placeholder descriptions for each dish (use actual descriptions from API or database)
  const getDescription = (name) => {
    switch (name) {
      case 'Kebab':
        return 'A popular Turkish dish made with seasoned meat grilled on skewers or open flames.';
      case 'Baklava':
        return 'A sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with honey.';
      case 'Pide':
        return 'often referred to as Turkish pizza, topped with various ingredients and baked in a wood-fired oven.';
      default:
        return 'A delightful Turkish dish with rich flavors and traditional ingredients.';
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
      <h1 className="category-heading">Turkish Recipes</h1>
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
                    <strong>Category:</strong> Turkish<br />
                    <strong>Area:</strong> Turkey
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

export default TurkishRecipes;
