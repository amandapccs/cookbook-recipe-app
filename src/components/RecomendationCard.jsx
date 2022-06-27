import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ src, name, id, path, testDiv, testTitle, testImg, category }) {
  return (
    <Link to={ `/${path}/${id}` } data-testid={ testDiv } className="card-recomendation">
      <img
        src={ src }
        alt={ name }
        data-testid={ testImg }
        className="image-recomendation"
      />
      <h5>{ category }</h5>
      <h4
        data-testid={ testTitle }
      >
        { name }
      </h4>
    </Link>

  );
}

Card.propTypes = {
  indexID: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Card;
