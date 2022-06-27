import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import CategorySearch from '../components/CategorySearch';
import { fetchApiDrinks } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

export default function DrinkPage() {
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
    const resultApi = await fetchApiDrinks();
    setFetchedFoodOrDrink(resultApi.drinks);
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
      <Header title="Drinks" />
      <CategorySearch curCategory="drinks" />
      <div
        className="card-container"
      >
        {renderCard.slice(0, MAX_LIST)
          .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <Card
              key={ index }
              src={ strDrinkThumb }
              name={ strDrink }
              indexID={ index }
              id={ idDrink }
              path="drinks"
            />
          ))}

      </div>
      <Footer />
    </div>
  );
}
