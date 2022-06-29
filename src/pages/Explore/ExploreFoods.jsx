import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Context } from '../../context/Provider';
import Button from '../../components/Button/Button';
import MainConteiner from './styles';

export default function ExploreFoods() {
  const { setShowSearchButton } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  const [randomFoodId, setRandomFoodId] = useState('53024');

  useEffect(() => {
    const fetchFoodRandom = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const foodDetailsData = data.meals[0].idMeal;
      setRandomFoodId(foodDetailsData);
      console.log(foodDetailsData);
    };
    fetchFoodRandom();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  return (
    <div>
      <Header title="Explore Foods" />
      <MainConteiner>
        <Button
          name="By Ingredient"
          datatestid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        />

        <Button
          name="By Nationality"
          datatestid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        />
        <Button
          name="Surprise me!"
          datatestid="explore-surprise"
          onClick={ () => history.push(`/foods/${randomFoodId}`) }
        />

      </MainConteiner>

      <Footer />
    </div>
  );
}
