import React from 'react';
import Pizza from '../../images/pizza.png';
import Espaguete from '../../images/espaguete.png';
import Nachos from '../../images/nachos.png';
import Cry from '../../images/cry.png';
import {
  Prizes,
} from './styles';

export default function PrizesComponent() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // console.log(doneRecipes.length);
  const firstPrize = 6;
  const secondPrize = 4;
  const thirdPrize = 2;

  const getPrizeIcon = () => {
    const prize0 = {
      prize: Cry,
      message: 'You haven\'t done enough recipes!',
    };

    if (!doneRecipes || doneRecipes.length <= thirdPrize) {
      return prize0;
    }
    if (doneRecipes.length >= firstPrize) {
      const prize1 = {
        prize: Nachos,
        message: `Wow! You have done ${doneRecipes.length} recipes, you are such a Chef!`,
      };
      return prize1;
    }
    if (doneRecipes.length >= secondPrize) {
      const prize2 = {
        prize: Espaguete,
        message: `Amazing! You have done ${doneRecipes.length} recipes,
         Gordon Ramsay would be proud!`,
      };
      return prize2;
    }
    if (doneRecipes.length >= thirdPrize) {
      const prize3 = {
        prize: Pizza,
        message: `Congrats! You have done ${doneRecipes.length} recipes! `,
      };
      return prize3;
    }
  };

  return (
    <Prizes>
      <img src={ getPrizeIcon().prize } alt="Premio" />
      <p>
        { getPrizeIcon().message }
      </p>
    </Prizes>

  );
}
