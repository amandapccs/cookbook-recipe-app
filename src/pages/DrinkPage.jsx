import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/MainCard';
import { fetchApiDrinks } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

export default function DrinkPage() {
  const {
    fetchedFoodOrDrink,
    setFetchedFoodOrDrink,
  } = useContext(RecipeContext);

  const MAX_LIST = 12;

  async function inicialData() {
    const resultApi = await fetchApiDrinks();
    setFetchedFoodOrDrink(resultApi.drinks);
  }

  useEffect(() => {
    inicialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Drinks" />
      <div
        className="card-container"
      >

        {fetchedFoodOrDrink.slice(0, MAX_LIST)
          .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <Card
              key={ idDrink }
              src={ strDrinkThumb }
              name={ strDrink }
              dataTesteID={ index }
              id={ idDrink }
              path="bebidas"
            />
          ))}

      </div>
      <Footer />
    </div>
  );
}
