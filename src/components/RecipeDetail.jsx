// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/recipeDetail.css';
import SimilarRecipesCarousel from './SimilarRecipesCarousel';
import '../App.css'
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
      <div className="recipe-detail-header">
        <h1 className="recipe-title">{recipe.strMeal}</h1>
        <p className="recipe-meta">
          <strong>Category:</strong> {recipe.strCategory} | <strong>Area:</strong> {recipe.strArea}
        </p>
      </div>
      <div className="recipe-detail-content">
        <div className="recipe-detail-img">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="recipe-detail-text">
          <h2>Instructions</h2>
          <p>{recipe.strInstructions}</p>
        </div>
        <div className="recipe-detail-ingredients">
          <h2>Ingredients</h2>
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
