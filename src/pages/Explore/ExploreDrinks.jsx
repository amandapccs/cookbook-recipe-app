import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Context } from '../../context/Provider';
import Button from '../../components/Button/Button';
import MainConteiner from './styles';

export default function ExploreDrinks() {
  const { setShowSearchButton } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  const [randomDrinkId, setRandomDrinkId] = useState('11011');

  useEffect(() => {
    const fetchFoodRandom = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const drinkDetailsData = data.drinks[0].idDrink;
      setRandomDrinkId(drinkDetailsData);
      console.log(drinkDetailsData);
    };
    fetchFoodRandom();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  return (
    <div>
      <Header title="Explore Drinks" />
      <MainConteiner>
        <Button
          name="By Ingredient"
          datatestid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        />

        <Button
          name="Surprise me!"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/drinks/${randomDrinkId}`) }
        />

      </MainConteiner>

      <Footer />
    </div>
  );
}
