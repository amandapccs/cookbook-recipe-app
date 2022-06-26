import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ src, name, id, path, testDiv, testTitle, testImg }) {
  return (
    <Link to={ `${path}/${id}` } className="card-recomendation" data-testid={ testDiv }>
      <img
        src={ src }
        alt={ name }
        data-testid={ testImg }
        className="card-image"
      />
      <h3
        data-testid={ testTitle }
        className="card-title"
      >
        { name }
      </h3>

    </Link>
  );
}

Card.propTypes = {
  indexID: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Card;
