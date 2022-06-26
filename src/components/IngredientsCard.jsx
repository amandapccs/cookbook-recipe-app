import PropTypes from 'prop-types';
import React from 'react';

function IngredientsCard({ data }) {
  const ingredients = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strIngredient')
    && value)));
  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value !== ' ' && value)));

  return (
    <ul className="ingredients-card">
      { measures.map((measure, index) => (
        <li
          key={ `${ingredients[index]} - ${index}}` }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {' '}
          {`${measure} - ${ingredients[index]}`}
          {' '}
        </li>
      ))}
    </ul>
  );
}

IngredientsCard.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default IngredientsCard;
