// SimilarRecipesCarousel.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/recipeDetail.css'; // Include the same CSS file for styling

const SimilarRecipesCarousel = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchSimilarRecipes = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
      const data = await response.json();
      setRecipes(data.meals.slice(0, 10)); // Get a list of recipes
    };

    fetchSimilarRecipes();
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
    <div className="carousel-container">
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <Link to={`/${recipe.idMeal}`} key={recipe.idMeal} className="carousel-item">
            <div className="carousel-img">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p>{recipe.strMeal}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarRecipesCarousel;
