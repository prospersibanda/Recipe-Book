// src/components/NigerianRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Add this file for custom styles

const NigerianRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Nigerian');
        const data = await response.json();
        setRecipes(data.meals || []); // Ensure recipes is always an array
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes([]); // Set to empty array in case of error
      }
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
      <h1>Nigerian Recipes</h1>
      <div className="recipe-slider">
        <Slider {...settings}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link to={`/${recipe.idMeal}`} key={recipe.idMeal}>
                <div className="slider-item">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <p>{recipe.strMeal}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default NigerianRecipes;
