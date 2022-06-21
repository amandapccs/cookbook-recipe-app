import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ src, name, dataTesteID, id, path }) {
  return (
    <Link to={ `${path}/${id}` } className="card">
      <div>
        <div
          data-testid={ `${dataTesteID}-recipe-card` }
        >
          <img
            src={ src }
            alt={ name }
            data-testid={ `${dataTesteID}-card-img` }
            className="card-image"
          />
          <h3
            data-testid={ `${dataTesteID}-card-name` }
            className="card-title"
          >
            { name }
          </h3>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  dataTesteID: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Card;
