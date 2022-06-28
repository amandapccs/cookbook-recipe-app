import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { FooterConteiner, Img } from './styles';

export default function Footer() {
  return (
    <FooterConteiner
      className="footerConteiner"
      data-testid="footer"
    >
      <Link
        to="/drinks"
      >
        <Img
          src={ drinkIcon }
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="/explore"
      >
        <Img
          src={ exploreIcon }
          alt="exploreIcon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="/foods"
      >
        <Img
          src={ mealIcon }
          alt="mealIcon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </FooterConteiner>
  );
}
