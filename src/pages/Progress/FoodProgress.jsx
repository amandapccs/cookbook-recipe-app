import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import favIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import InProgressIngredients from '../../components/InProgressIngredients';
import { Context as RecipeContext } from '../../context/Provider';

import {
  MainConteiner,
  FoodImg,
  FoodTitle,
  Title,
  FoodInstructions,
  InstructionsContainer,
  ShareAndFavContainer,
  Buttons,
  LinkCopied,
  FinishRecipeButton,
} from './styles';

export default function FoodProgress() {
  const history = useHistory();
  const { isDisabled } = useContext(RecipeContext);
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState({});
  const [copied, setCopied] = useState(false);
  const local = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const localDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [favoriteIcon, setFavoriteIcon] = useState(local
    .some((item) => item.id === id) ? blackHeartIcon : favIcon);

  if (!localStorage.getItem('inProgressRecipes')) {
    const newProgressLocal = { cocktails: { 0: [] }, meals: { 0: [] } };
    const type = 'meals';
    const newId = { ...newProgressLocal,
      [type]: { ...newProgressLocal[type], [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newId));
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`)
      .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
    setCopied(true);
  };

  const handleFavoriteClick = () => {
    const { strMealThumb, strCategory, strArea, strMeal, idMeal } = foodDetails;

    const newFavRecipes = {
      id: idMeal,
      type: 'food',
      nationality: strArea || '',
      category: strCategory || '',
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };

    if (local.some((food) => food.id === idMeal)) {
      const filterMeal = local.filter((meal) => meal.id !== idMeal);
      localStorage.setItem('favoriteRecipes', JSON.stringify([filterMeal]));
      setFavoriteIcon(favIcon);
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...local, newFavRecipes]));
      setFavoriteIcon(blackHeartIcon);
    }
  };

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

  const finishRecipe = () => {
    const {
      strMealThumb,
      strCategory,
      strArea,
      strMeal,
      idMeal,
      // strTags,
    } = foodDetails;

    // const comma = ',';
    // const splitedTags = strTags.split(comma);

    const data = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };

    const doneRecipe = {
      id: idMeal,
      type: 'food',
      nationality: strArea || '',
      category: strCategory || '',
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      doneDate: data.toLocaleString('pt-BR', options),
      tags: [],
    };

    if (!localDone.some((food) => food.id === idMeal)) {
      localStorage.setItem('doneRecipes', JSON.stringify([...localDone, doneRecipe]));
    }

    history.push('/done-recipes');
  };

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

      <ShareAndFavContainer>
        <Buttons
          type="button"
          onClick={ copyToClipboard }
        >
          <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
        </Buttons>
        <Buttons
          type="button"
          onClick={ handleFavoriteClick }
        >
          <img
            src={ favoriteIcon }
            alt="Fav icon"
            data-testid="favorite-btn"
          />
        </Buttons>
        { copied && <LinkCopied>Link copied!</LinkCopied>}
      </ShareAndFavContainer>

      <Title>Ingredients</Title>
      <InProgressIngredients data={ foodDetails } />
      <Title>Instructions</Title>
      <InstructionsContainer>
        <FoodInstructions data-testid="instructions">
          { foodDetails.strInstructions }
        </FoodInstructions>
      </InstructionsContainer>

      <FinishRecipeButton
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ isDisabled }
        onClick={ finishRecipe }
      >
        Finish Recipe
      </FinishRecipeButton>
    </MainConteiner>
  );
}
