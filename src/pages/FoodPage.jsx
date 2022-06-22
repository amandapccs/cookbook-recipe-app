import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import { fetchApi } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

function FoodPage() {
  const {
    fetchedFoodOrDrink,
    setFetchedFoodOrDrink,
  } = useContext(RecipeContext);
  const MAX_LIST = 12;

  async function inicialData() {
    const resultApi = await fetchApi();
    setFetchedFoodOrDrink(resultApi.meals);
  }

  useEffect(() => {
    inicialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Foods" />
      <div
        className="card-container"
      >

        {fetchedFoodOrDrink.slice(0, MAX_LIST)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <Card
              key={ idMeal }
              src={ strMealThumb }
              name={ strMeal }
              dataTesteID={ index }
              id={ idMeal }
              path="comidas"
            />
          ))}

      </div>
      <Footer />
    </div>
  );
}

export default FoodPage;
