import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import InProgressIngredients from '../components/InProgressIngredients';

export default function DrinkProgress() {
  const { id } = useParams();

  const [drinksDetails, setDrinksDetails] = useState({});

  useEffect(() => {
    const fetchDrinksDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const drinksDetailsData = data.drinks[0];
      setDrinksDetails(drinksDetailsData);
      console.log(drinksDetailsData);
    };
    fetchDrinksDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Drink in Progress</h1>
      <img
        data-testid="recipe-photo"
        width="360"
        height="200"
        src={ drinksDetails.strDrinkThumb }
        alt={ `${drinksDetails.strDrink}` }
      />
      <button
        type="button"
      >
        <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
      </button>
      <button
        type="button"
        // className="search-btn"
        // onClick={ () => setShowSeachInput(!showSearchInput) }
      >
        <img src={ favIcon } alt="Share icon" data-testid="favorite-btn" />
      </button>
      <h1 data-testid="recipe-title">
        { drinksDetails.strDrink }
      </h1>
      <h3 data-testid="recipe-category">
        { drinksDetails.strAlcoholic }
      </h3>
      <h2>Ingredients</h2>
      <InProgressIngredients data={ drinksDetails } />
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { drinksDetails.strInstructions }
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
