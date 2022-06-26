import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsCard from '../components/IngredientsCard';
import Card from '../components/RecomendationCard';
import Button from '../components/ButtonStartRecipe';
import ShareAndFav from '../components/ButtonsShareAndFav';

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

      <ShareAndFav
        id={ id }
        idType={ drinksDetails.idDrink }
        image={ drinksDetails.strDrinkThumb }
        category={ drinksDetails.strCategory }
        area={ drinksDetails.strArea }
        alcoholic={ drinksDetails.strAlcoholic }
        name={ drinksDetails.strDrink }
        type="drink"
        page="drinks"
      />
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
      <div className="recomendation-container">
        {recommended.slice(0, MAX_RECOMMENDATION)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <Card
              key={ index }
              src={ strMealThumb }
              name={ strMeal }
              testDiv={ `${index}-recomendation-card` }
              testTitle={ `${index}-recomendation-title` }
              testImg={ `${index}-card-img` }
              id={ idMeal }
              path="foods"
            />
          ))}
      </div>
      <Button
        id={ id }
        type="cocktails"
        page="drinks"
      />
    </div>
  );
}
