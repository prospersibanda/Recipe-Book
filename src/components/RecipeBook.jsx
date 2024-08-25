import React from 'react';
import '../Styles/recipeBook.css';  // Path for Recipe Book CSS
import Image1 from '../Assets/about1.jpg';
import Image2 from '../Assets/about2.jpg';

const RecipeBook = () => {
  return (
    <section className="recipe-book">
      <div className="recipe-book-content">
        <h2 className="recipe-book-heading">Discover Our Recipe Book</h2>
        
        <div className="recipe-book-row">
          <div className="recipe-book-text">
            <p>
              Welcome to our Recipe Book, where we bring you a curated collection of mouth-watering recipes from around the world. Our extensive recipe book offers a variety of dishes to suit every taste and occasion. Whether you're looking for quick weeknight dinners, indulgent desserts, or gourmet meals, you'll find it all here.
            </p>
          </div>
          <div className="recipe-book-image">
            <img src={Image1} alt="Delicious Recipe 1" />
          </div>
        </div>

        <div className="recipe-book-row reverse"  style={{marginLeft: '-450px'}}>
          <div className="recipe-book-text" style={{marginLeft: '-450px', width: '40%'}}>
            <p>
              Each recipe is meticulously crafted with detailed instructions, ingredient lists, and beautiful images to guide you through the cooking process. Join our community of food enthusiasts and elevate your cooking skills with our expertly curated recipes.
            </p>
          </div>
          <div className="recipe-book-image">
            <img src={Image2} alt="Delicious Recipe 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeBook;
