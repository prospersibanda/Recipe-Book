import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import '../Styles/similarRecipesCarousel.css'; // Add this file for custom styles

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
    arrows: false, // Hide default arrows
    dots: true,    // Add dots for navigation
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Similar Recipes</h2>
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <Link to={`/${recipe.idMeal}`} key={recipe.idMeal} className="carousel-item">
            <div className="carousel-img">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <div className="carousel-info">
                <p>{recipe.strMeal}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarRecipesCarousel;
