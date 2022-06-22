import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import { fetchApi } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

function FoodPage() {
  const { data, setData, fetchedFoodOrDrink } = useContext(RecipeContext);
  const MAX_LIST = 12;

  async function inicialData() {
    const resultApi = await fetchApi();
    setData(resultApi.meals);
  }

  useEffect(() => {
    inicialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(fetchedFoodOrDrink);
  }, [fetchedFoodOrDrink]);

  return (
    <div>
      <Header title="Foods" />
      <div
        className="card-container"
      >

        { fetchedFoodOrDrink.lenght !== 0
          ? (
            <>
              {data.slice(0, MAX_LIST).map(({ idMeal, strMeal, strMealThumb }, index) => (
                <Card
                  key={ idMeal }
                  src={ strMealThumb }
                  name={ strMeal }
                  dataTesteID={ index }
                  id={ idMeal }
                  path="comidas"
                />
              ))}

            </>
          )
          : (
            <>
              {/*  {fetchedFoodOrDrink.map(({ idMeal, strMeal, strMealThumb }, index) => (
                <Card
                  key={ idMeal }
                  src={ strMealThumb }
                  name={ strMeal }
                  dataTesteID={ index }
                  id={ idMeal }
                  path="comidas"
                />
              ))} */}
              teste
            </>) }

        {/* {data.slice(0, MAX_LIST).map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Card
            key={ idMeal }
            src={ strMealThumb }
            name={ strMeal }
            dataTesteID={ index }
            id={ idMeal }
            path="comidas"
          />
        ))} */}

      </div>
      <Footer />
    </div>
  );
}

export default FoodPage;
