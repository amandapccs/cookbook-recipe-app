import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsCard from '../components/IngredientsCard';
import Card from '../components/RecomendationCard';
import Button from '../components/ButtonStartRecipe';
import ShareAndFav from '../components/ButtonsShareAndFav';

import './Details.css';

export default function FoodDetails() {
  const { id } = useParams();
  // const history = useHistory();

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

  const MAX_RECOMMENDATION = 6;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const resolve = await response.json();
      setRecommended(resolve.drinks);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        width="360"
        height="200"
        src={ foodDetails.strMealThumb }
        alt={ `${foodDetails.strMeal}` }
      />
      <div className="details">
        <div className="details-header">
          <h1 data-testid="recipe-title">
            { foodDetails.strMeal }
          </h1>
          <ShareAndFav
            id={ id }
            idType={ foodDetails.idMeal }
            image={ foodDetails.strMealThumb }
            category={ foodDetails.strCategory }
            area={ foodDetails.strArea }
            name={ foodDetails.strMeal }
            type="food"
            page="foods"
          />
        </div>
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
        <div className="video">
          <iframe
            data-testid="video"
            width="340"
            height="200"
            src={ `https://www.youtube.com/embed/${YTCode}` }
            title={ foodDetails.strMeal }
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <h2>Recommended</h2>
        <div className="recomendation-container">
          {recommended.slice(0, MAX_RECOMMENDATION)
            .map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic }, index) => (
              <Card
                key={ index }
                src={ strDrinkThumb }
                name={ strDrink }
                testDiv={ `${index}-recomendation-card` }
                testTitle={ `${index}-recomendation-title` }
                testImg={ `${index}-card-img` }
                id={ idDrink }
                path="drinks"
                category={ strAlcoholic }
              />
            ))}
        </div>
        <Button
          id={ id }
          type="meals"
          page="foods"
        />
      </div>
    </div>

  );
}
