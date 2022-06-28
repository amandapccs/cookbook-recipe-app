import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context as RecipeContext } from '../context/Provider';

export default function ExploreDrinksByIngredients() {
  const { setShowSearchButton,
    setFetchedFoodOrDrink, setExploreTrue } = useContext(RecipeContext);
  const history = useHistory();

  const [ingredients, setIngredients] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  useEffect(() => {
    async function fetchFoodByIngredients() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const resolve = await response.json();
      console.log(resolve.drinks);
      setIngredients(resolve.drinks);
    }
    fetchFoodByIngredients();
  }, []);

  const handleClick = async (n) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${n}`);
    const resolve = await response.json();
    const { drinks } = resolve;
    console.log(drinks);
    if (drinks.length === 1) {
      const { idDrink } = drinks[0];
      return history.push(`/drinks/${idDrink}`);
    }
    setExploreTrue(true);
    setFetchedFoodOrDrink(drinks);
    history.push('/drinks');
  };

  const MAX_INGREDIENTS = 12;

  return (
    <div>
      <Header title="Explore Ingredients" />
      <div>
        {ingredients.slice(0, MAX_INGREDIENTS)
          .map(({ strIngredient1 }, index) => (
            <button
              data-testid={ `${index}-ingredient-card` }
              type="button"
              onClick={ () => handleClick(strIngredient1) }
              key={ index }
            >
              <img
                src={
                  `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
                }
                alt={ strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <h4
                data-testid={ `${index}-card-name` }
              >
                { strIngredient1 }
              </h4>
            </button>
          ))}
      </div>
      <Footer />
    </div>
  );
}
