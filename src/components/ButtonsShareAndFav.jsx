import PropTypes from 'prop-types';
import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShareAndFav({ id, image, category, area, name, type, alcoholic, idType, page }) {
  const [copied, setCopied] = useState(false);
  const local = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [favoriteIcon, setFavoriteIcon] = useState(local
    .some((item) => item.id === id) ? blackHeartIcon : favIcon);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${page}/${id}`)
      .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
    setCopied(true);
  };

  const handleFavoriteClick = () => {
    const newFavRecipes = {
      id: idType,
      type,
      nationality: area || '',
      category: category || '',
      alcoholicOrNot: alcoholic || '',
      name,
      image,
    };

    if (local.some((drink) => drink.id === idType)) {
      const filterDrink = local.filter((drink) => drink.id !== idType);
      localStorage.setItem('favoriteRecipes', JSON.stringify([filterDrink]));
      setFavoriteIcon(favIcon);
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...local, newFavRecipes]));
      setFavoriteIcon(blackHeartIcon);
    }
  };

  return (
    <div className="btn-div">
      <button
        type="button"
        // className="search-btn"
        onClick={ copyToClipboard }
      >
        <img src={ shareIcon } alt="Share icon" data-testid="share-btn" />
      </button>
      { copied && <span>Link copied!</span>}
      <button
        type="button"
        // className="search-btn"
        onClick={ handleFavoriteClick }
      >
        <img src={ favoriteIcon } alt="Fav icon" data-testid="favorite-btn" />
      </button>
    </div>
  );
}

ShareAndFav.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  page: PropTypes.string,
}.isRequired;

export default ShareAndFav;
