import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context as RecipeContext } from '../context/Provider';

export default function ExploreFoodsByIngredients() {
  const { setShowSearchButton,
    setFetchedFoodOrDrink, setExploreTrue } = useContext(RecipeContext);
  const history = useHistory();

  const [ingredients, setIngredients] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  useEffect(() => {
    async function fetchFoodByIngredients() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const resolve = await response.json();
      // console.log(resolve.meals);
      setIngredients(resolve.meals);
    }
    fetchFoodByIngredients();
  }, []);

  const handleClick = async (name) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
    const resolve = await response.json();
    const { meals } = resolve;
    console.log(meals);
    if (meals.length === 1) {
      const { idMeal } = meals[0];
      console.log(idMeal);
      return history.push(`/foods/${idMeal}`);
    }
    setExploreTrue(true);
    setFetchedFoodOrDrink(meals);
    history.push('/foods');
  };

  const MAX_INGREDIENTS = 12;

  return (
    <div>
      <Header title="Explore Ingredients" />
      <div>
        {ingredients.slice(0, MAX_INGREDIENTS)
          .map(({ strIngredient }, index) => (
            <button
              data-testid={ `${index}-ingredient-card` }
              type="button"
              onClick={ () => handleClick(strIngredient) }
              key={ index }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ strIngredient }
                data-testid={ `${index}-card-img` }
              />
              <h4
                data-testid={ `${index}-card-name` }
              >
                { strIngredient }
              </h4>
            </button>
          ))}
      </div>
      <Footer />
    </div>
  );
}
