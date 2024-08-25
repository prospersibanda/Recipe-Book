// src/components/IndianRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Ensure this file contains the updated styles

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

  // Placeholder descriptions for each dish (use actual descriptions from API or database)
  const getDescription = (name) => {
    switch (name) {
      case 'Chicken Curry':
        return 'A flavorful curry made with tender chicken pieces in a rich, spiced sauce.';
      case 'Samosa':
        return 'Crispy pastry filled with a spiced potato and pea mixture.';
      case 'Naan':
        return 'Soft and fluffy Indian bread, perfect for dipping in curries.';
      default:
        return 'A delicious Indian dish with aromatic spices and vibrant flavors.';
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
      <h1 className="category-heading">Indian Recipes</h1>
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
                    <strong>Category:</strong> Indian<br />
                    <strong>Area:</strong> India
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

export default IndianRecipes;
