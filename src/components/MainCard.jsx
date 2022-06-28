import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ src, name, indexID, id, path }) {
  return (
    <Link to={ `/${path}/${id}` } className="card">
      <div
        data-testid={ `${indexID}-recipe-card` }
      >
        <img
          src={ src }
          alt={ name }
          data-testid={ `${indexID}-card-img` }
          className="card-image"
        />
        <h3
          data-testid={ `${indexID}-card-name` }
          className="card-title"
        >
          { name }
        </h3>
      </div>
    </Link>
  );
}

Card.propTypes = {
  indexID: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Card;
