import PropTypes from 'prop-types';
import React from 'react';
import { ButtonContainer, Image, CardTitle } from './styles';

function Card({ index, strIngredient, click, src }) {
  return (
    <ButtonContainer
      data-testid={ `${index}-ingredient-card` }
      type="button"
      onClick={ click }
      key={ index }
    >
      <Image
        src={ src }
        alt={ strIngredient }
        data-testid={ `${index}-card-img` }
      />
      <CardTitle
        data-testid={ `${index}-card-name` }
      >
        { strIngredient }
      </CardTitle>
    </ButtonContainer>
  );
}

Card.propTypes = {
  index: PropTypes.string,
  strIngredient: PropTypes.string,
  src: PropTypes.string,
  click: PropTypes.func,
}.isRequired;

export default Card;
