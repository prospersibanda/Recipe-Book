// src/components/TurkishRecipes.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css'; // Ensure this file contains your custom styles

const TurkishRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Turkish');
        const data = await response.json();
        console.log(data); // Log the data to verify the structure
        if (data && data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]); // Handle if 'meals' is not present
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes([]); // Handle fetch errors
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
      <h1>Turkish Recipes</h1>
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

export default TurkishRecipes;
