import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import InProgressIngredients from '../components/InProgressIngredients';

export default function FoodProgress() {
  const { id } = useParams();

  const [foodDetails, setFoodDetails] = useState({});

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const foodDetailsData = data.meals[0];
      setFoodDetails(foodDetailsData);
    };
    fetchFoodDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Food in Progress</h1>
      <img
        data-testid="recipe-photo"
        width="360"
        height="200"
        src={ foodDetails.strMealThumb }
        alt={ `${foodDetails.strMeal}` }
      />
      <button
        type="button"
      >
        <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
      </button>
      <button
        type="button"
      >
        <img src={ favIcon } alt="Fav icon" data-testid="favorite-btn" />
      </button>

      <h1 data-testid="recipe-title">
        { foodDetails.strMeal }
      </h1>
      <h3 data-testid="recipe-category">
        { foodDetails.strCategory }
      </h3>
      <h2>Ingredients</h2>
      <InProgressIngredients data={ foodDetails } />
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { foodDetails.strInstructions }
      </p>

      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        Finish Recipe
      </button>
    </div>
  );
}
