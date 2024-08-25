// src/components/ThaiRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Ensure this file contains the updated styles

const ThaiRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai');
      const data = await response.json();
      setRecipes(data.meals);
    };

    fetchRecipes();
  }, []);

  // Placeholder descriptions for each dish (use actual descriptions from API or database)
  const getDescription = (name) => {
    switch (name) {
      case 'Pad Thai':
        return 'A popular Thai stir-fried noodle dish with a savory-sweet flavor and a variety of toppings.';
      case 'Green Curry':
        return 'A spicy and aromatic curry made with green chili paste and coconut milk.';
      case 'Tom Yum Goong':
        return 'A tangy and spicy Thai soup made with shrimp, mushrooms, and herbs.';
      default:
        return 'A flavorful Thai dish with a balance of spicy, sweet, and savory elements.';
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
      <h1 className="category-heading">Thai Recipes</h1>
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
                    <strong>Category:</strong> Thai<br />
                    <strong>Area:</strong> Thailand
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

export default ThaiRecipes;
