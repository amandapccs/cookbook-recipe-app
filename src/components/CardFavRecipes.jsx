import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardFavRecipes({
  image,
  name,
  index,
  type,
  category,
  alcoholic,
  doneDate,
  area,
  tags,
  id,
  setFilteredData,
}) {
  const [copied, setCopied] = useState(false);
  const local = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`)
      .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
    setCopied(true);
  };

  const handleFavoriteClick = () => {
    if (local.some((recipe) => recipe.id === id)) {
      const filterLocalStorage = local.filter((recipe) => recipe.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterLocalStorage));
      setFilteredData(filterLocalStorage);
    }
  };

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          className="recipe-done-image"
        />
        <h3 data-testid={ `${index}-horizontal-name` }>
          {name}
        </h3>
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? (
          `${area} - ${category}`
        ) : (
          `${alcoholic}`
        )}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <div>
        {tags && tags.map((tagName) => (
          <p
            data-testid={ `${index}-${tagName}-horizontal-tag` }
            key={ `${tagName}${index}` }
          >
            {tagName}
          </p>
        ))}
      </div>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        src="src/images/shareIcon.svg"
        onClick={ copyToClipboard }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <button
        type="button"
        className="btn-fav"
        onClick={ handleFavoriteClick }
      >
        <img
          src={ blackHeartIcon }
          alt="Fav icon"
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
      { copied && <span>Link copied!</span>}
    </div>
  );
}

export default CardFavRecipes;

CardFavRecipes.defaultProps = {
  doneDate: '',
  category: '',
  image: '',
  name: '',
  index: '',
  type: '',
  alcoholic: '',
  area: '',
  id: '',
  tags: [],
};
CardFavRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  category: PropTypes.string,
  alcoholic: PropTypes.string,
  doneDate: PropTypes.string,
  area: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.any),
  setFilteredData: PropTypes.func.isRequired,
};
