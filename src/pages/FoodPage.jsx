import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import CategorySearch from '../components/CategorySearch';
import { fetchApi } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

function FoodPage() {
  const [renderCard, setRenderCard] = useState([]);
  const {
    setShowSearchButton,
    fetchedFoodOrDrink,
    setFetchedFoodOrDrink,
    toggle,
    categoryFoodsOrDrinks,
  } = useContext(RecipeContext);

  const MAX_LIST = 12;

  async function inicialData() {
    const resultApi = await fetchApi();
    setFetchedFoodOrDrink(resultApi.meals);
  }

  useEffect(() => {
    if (fetchedFoodOrDrink) {
      setRenderCard(fetchedFoodOrDrink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedFoodOrDrink]);

  useEffect(() => {
    setShowSearchButton(true);
    inicialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (toggle) setRenderCard(categoryFoodsOrDrinks);
    else setRenderCard(fetchedFoodOrDrink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFoodsOrDrinks, toggle]);

  return (
    <div>
      <Header title="Foods" />
      <CategorySearch curCategory="foods" />
      <div
        className="card-container"
      >
        {renderCard.slice(0, MAX_LIST)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <Card
              key={ index }
              src={ strMealThumb }
              name={ strMeal }
              indexID={ index }
              id={ idMeal }
              path="foods"
            />
          ))}

      </div>
      <Footer />
    </div>
  );
}

export default FoodPage;
