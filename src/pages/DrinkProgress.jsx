import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import InProgressIngredients from '../components/InProgressIngredients';
import { Context as RecipeContext } from '../context/Provider';

export default function DrinkProgress() {
  const history = useHistory();
  const { isDisabled } = useContext(RecipeContext);
  const { id } = useParams();
  const [drinksDetails, setDrinksDetails] = useState({});
  const [copied, setCopied] = useState(false);
  const local = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [favoriteIcon, setFavoriteIcon] = useState(local
    .some((item) => item.id === id) ? blackHeartIcon : favIcon);

  if (!localStorage.getItem('inProgressRecipes')) {
    const newProgressLocal = { cocktails: { 0: [] }, meals: { 0: [] } };
    const type = 'cocktails';
    const newId = { ...newProgressLocal,
      [type]: { ...newProgressLocal[type], [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newId));
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`)
      .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
    setCopied(true);
  };

  console.log(drinksDetails);

  const handleFavoriteClick = () => {
    const { strDrinkThumb, strCategory, strDrink, idDrink,
      strAlcoholic } = drinksDetails;

    const newFavRecipes = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory || '',
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };

    if (local.some((drink) => drink.id === idDrink)) {
      const filterDrink = local.filter((drink) => drink.id !== idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify([filterDrink]));
      setFavoriteIcon(favIcon);
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...local, newFavRecipes]));
      setFavoriteIcon(blackHeartIcon);
    }
  };

  useEffect(() => {
    const fetchDrinksDetails = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      const drinksDetailsData = data.drinks[0];
      setDrinksDetails(drinksDetailsData);
    };
    fetchDrinksDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finishRecipe = () => {
    const { strDrinkThumb, strCategory, strDrink, idDrink,
      strAlcoholic, strTags } = drinksDetails;

    const data = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };

    const doneRecipe = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory || '',
      alcoholicOrNot: strAlcoholic || '',
      name: strDrink,
      image: strDrinkThumb,
      doneDate: data.toLocaleString('pt-BR', options),
      tags: strTags || [],
    };

    if (!local.some((drink) => drink.id === idDrink)) {
      localStorage.setItem('doneRecipes', JSON.stringify([...local, doneRecipe]));
    }

    history.push('/done-recipes');
  };

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
        onClick={ copyToClipboard }
      >
        <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
      </button>
      <button
        type="button"
        onClick={ handleFavoriteClick }
      >
        <img src={ favoriteIcon } alt="Fav icon" data-testid="favorite-btn" />
      </button>
      { copied && <span>Link copied!</span>}
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
        disabled={ isDisabled }
        onClick={ finishRecipe }
      >
        Finish Recipe
      </button>
    </div>
  );
}
