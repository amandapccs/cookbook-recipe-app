import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsCard from '../components/IngredientsCard';
import Card from '../components/MainCard';
import { getDoneRecipes, getInProgressRecipes } from '../helpers/LocalStorage';

import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import './Details.css';

export default function DrinksDetails() {
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

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const resolve = await response.json();
      setRecommended(resolve.meals);
    };
    fetchApi();
  }, []);

  const MAX_RECOMMENDATION = 6;

  const buttonStart = () => {
    if (JSON.parse(getDoneRecipes()) !== []) {
      const finished = JSON.parse(getDoneRecipes())
        .some((donerecipe) => donerecipe.id === id);
      if (!finished) {
        const progress = JSON.parse(getInProgressRecipes()).cocktails;
        const AAAAA = Object.keys(progress)
          .some((progressrecipe) => progressrecipe === id);
        if (AAAAA) {
          return (
            <button
              data-testid="start-recipe-btn"
              className="btn-details btn btn-danger"
              type="button"
              // onClick={ () => { history.push('/settings'); } }
              value="Continue Recipe"
            >
              Continue Recipe
            </button>
          );
        }
        return (<input
          data-testid="start-recipe-btn"
          className="btn-details btn btn-danger"
          type="button"
          // onClick={ () => { history.push('/settings'); } }
          value="Start Recipe"
        />);
      }
    }
  };

  return (
    <div className="details">
      <h1>Drink Details</h1>
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
      <IngredientsCard data={ drinksDetails } />
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { drinksDetails.strInstructions }
      </p>
      <h2>Recommended</h2>
      {recommended.slice(0, MAX_RECOMMENDATION)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div
            key={ `${index}-recomendation-card` }
            data-testid={ `${index}-recomendation-card` }
          >
            <Card
              key={ idMeal }
              src={ strMealThumb }
              name={ strMeal }
              dataTesteID={ index }
              id={ idMeal }
              path="foods"
            />
          </div>
        ))}
      <div className="btn-div">
        {buttonStart()}
      </div>

    </div>
  );
}
