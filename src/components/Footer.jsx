import React from 'react';
import './Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer
      data-testid="footer"
    >
      <div
        className="footerConteiner"
      >
        <Link
          to=""
        >
          <img
            src={ drinkIcon }
            alt="drinkIcon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <div
          data-testid="explore-bottom-btn"
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </div>
        <div
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="mealIcon" />
        </div>
      </div>
    </footer>
  );
}
