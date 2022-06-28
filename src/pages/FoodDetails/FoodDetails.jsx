import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngredientsCard from '../../components/IngredientsCard/IngredientsCard';
import Card from '../../components/RecomendationCard';
import Button from '../../components/ButtonStartRecipe';
import ShareAndFav from '../../components/ButtonsShareAndFav';
import './Details.css';
import {
  RecomendationConteiner,
  MainConteiner,
  FoodImg,
  FoodTitle,
  IngredientsTitle,
  ShareAndFavContainer,
  FoodInstructions,
  InstructionsContainer,
} from './styles';

export default function FoodDetails() {
  const { id } = useParams();

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
    <MainConteiner>
      <FoodTitle data-testid="recipe-title">
        { foodDetails.strMeal }
      </FoodTitle>
      <FoodImg
        data-testid="recipe-photo"
        width="360"
        height="200"
        src={ foodDetails.strMealThumb }
        alt={ `${foodDetails.strMeal}` }
      />
      <ShareAndFavContainer className="details-header">
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
      </ShareAndFavContainer>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsCard data={ foodDetails } />
      <IngredientsTitle>Instructions</IngredientsTitle>
      <InstructionsContainer>
        <FoodInstructions>
          { foodDetails.strInstructions }
        </FoodInstructions>

      </InstructionsContainer>
      <div className="details">
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
        <RecomendationConteiner>
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
        </RecomendationConteiner>
        <Button
          id={ id }
          type="meals"
          page="foods"
        />
      </div>
    </MainConteiner>

  );
}
