import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/Provider';
import Card from '../components/RecomendationCard';

export default function ExploreFoodsByIngredients() {
  const { setShowSearchButton } = useContext(Context);

  const [ingredients, setIngredients] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  useEffect(() => {
    async function fetchFoodByIngredients() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const resolve = await response.json();
      console.log(resolve.meals);
      setIngredients(resolve.meals);
    }
    fetchFoodByIngredients();
  }, []);

  const MAX_INGREDIENTS = 12;

  return (
    <div>
      <Header title="Explore Ingredients" />
      <div>
        {ingredients.slice(0, MAX_INGREDIENTS)
          .map(({ idIngredient, strIngredient }, index) => (
            <Card
              key={ index }
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              name={ strIngredient }
              testDiv={ `${index}-ingredient-card` }
              testTitle={ `${index}-card-name` }
              testImg={ `${index}-card-img` }
              id={ idIngredient }
              path="drinks"
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}
