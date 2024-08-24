// RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/recipeDetail.css';
import SimilarRecipesCarousel from './SimilarRecipesCarousel';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals[0]);
    };

    fetchRecipeDetail();
  }, [id]);

  if (!recipe) return <div className="loading">Loading...</div>;

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-content">
        <div className="recipe-detail-img">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="recipe-detail-text">
          <h2>{recipe.strMeal}</h2>
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Area:</strong> {recipe.strArea}</p>
        </div>
      </div>
      <div className="recipe-detail-info">
        <div className="recipe-detail-description">
          <h3>Instructions</h3>
          <p>{recipe.strInstructions}</p>
        </div>
        <div className="recipe-detail-ingredients">
          <h3>Ingredients</h3>
          <ul>
            {Object.keys(recipe)
              .filter(key => key.startsWith('strIngredient') && recipe[key])
              .map(key => (
                <li key={key}>{recipe[key]}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className="similar-recipes">
        <h2>Similar Recipes</h2>
        <SimilarRecipesCarousel />
      </div>
    </div>
  );
};

export default RecipeDetail;
