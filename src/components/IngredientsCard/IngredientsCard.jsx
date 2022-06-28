import PropTypes from 'prop-types';
import React from 'react';
import { IngredientsContainer, Ingredients } from './styles';

function IngredientsCard({ data }) {
  const ingredients = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strIngredient')
    && value)));
  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value !== ' ' && value)));

  return (
    <IngredientsContainer>
      { measures.map((measure, index) => (
        <Ingredients
          key={ `${ingredients[index]} - ${index}}` }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {' '}
          {`${measure} - ${ingredients[index]}`}
          {' '}
        </Ingredients>
      ))}
    </IngredientsContainer>
  );
}

IngredientsCard.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default IngredientsCard;
