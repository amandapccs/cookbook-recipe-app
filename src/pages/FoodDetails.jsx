import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import IngredientsCard from '../components/IngredientsCard';
import Card from '../components/MainCard';
import { getDoneRecipes, getInProgressRecipes } from '../helpers/LocalStorage';

import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import './Details.css';

export default function FoodDetails() {
  const { id } = useParams();
  const history = useHistory();

  const [foodDetails, setFoodDetails] = useState({});
  const [YTCode, setYTCode] = useState('/');

  const youtubeCode = (data) => setYTCode(data.split('=')[1]);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const foodDetailsData = data.meals[0];
      setFoodDetails(foodDetailsData);
      youtubeCode(foodDetailsData.strYoutube);
      console.log(foodDetailsData);
    };
    fetchFoodDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const resolve = await response.json();
      setRecommended(resolve.drinks);
    };
    fetchApi();
  }, []);

  const MAX_RECOMMENDATION = 6;

  const buttonStart = () => {
    if (JSON.parse(getDoneRecipes()) !== []) {
      const finished = JSON.parse(getDoneRecipes())
        .some((donerecipe) => donerecipe.id === id);
      if (!finished) {
        const progress = JSON.parse(getInProgressRecipes()).meals;
        const AAAAA = Object.keys(progress)
          .some((progressrecipe) => progressrecipe === id);
        if (AAAAA) {
          return (
            <button
              data-testid="start-recipe-btn"
              className="btn-details btn btn-danger"
              type="button"
              onClick={ () => { history.push(`/foods/${id}/in-progress`); } }
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
          onClick={ () => { history.push(`/foods/${id}/in-progress`); } }
          value="Start Recipe"
        />);
      }
    }
  };

  console.log(getInProgressRecipes());

  return (
    <div className="details">
      <h1>Food Details</h1>
      <img
        data-testid="recipe-photo"
        width="360"
        height="200"
        src={ foodDetails.strMealThumb }
        alt={ `${foodDetails.strMeal}` }
      />
      <button
        type="button"
        // className="search-btn"
        // onClick={ () => setShowSeachInput(!showSearchInput) }
      >
        <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
      </button>
      <button
        type="button"
        // className="search-btn"
        // onClick={ () => setShowSeachInput(!showSearchInput) }
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
      <IngredientsCard data={ foodDetails } />
      <h2>Instructions</h2>
      <p data-testid="instructions">
        { foodDetails.strInstructions }
      </p>
      <h2>Video</h2>
      <iframe
        data-testid="video"
        width="300"
        height="200"
        src={ `https://www.youtube.com/embed/${YTCode}` }
        title={ foodDetails.strMeal }
        frameBorder="0"
        allowFullScreen
      />
      <h2>Recommended</h2>
      {recommended.slice(0, MAX_RECOMMENDATION)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <div
            key={ `${index}-recomendation-card` }
            data-testid={ `${index}-recomendation-card` }
          >
            <Card
              key={ idDrink }
              src={ strDrinkThumb }
              name={ strDrink }
              dataTesteID={ index }
              id={ idDrink }
              path="drinks"
            />
          </div>
        ))}
      <div className="btn-div">
        {buttonStart()}
      </div>

    </div>
  );
}
