import PropTypes from 'prop-types';
import React from 'react';
import { CardConteiner, Image, LinkConteiner, CardTitle } from './styles';

function Card({ src, name, indexID, id, path }) {
  return (
    <LinkConteiner to={ `/${path}/${id}` }>
      <CardConteiner
        data-testid={ `${indexID}-recipe-card` }
      >
        <Image
          src={ src }
          alt={ name }
          data-testid={ `${indexID}-card-img` }
          className="card-image"
        />
        <CardTitle
          data-testid={ `${indexID}-card-name` }
          className="card-title"
        >
          { name }
        </CardTitle>
      </CardConteiner>
    </LinkConteiner>
  );
}

Card.propTypes = {
  indexID: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Card;
