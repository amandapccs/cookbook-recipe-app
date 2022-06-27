import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getDoneRecipes, getInProgressRecipes } from '../helpers/LocalStorage';

function Button({ id, type, page }) {
  const history = useHistory();

  function redirectToProgress() {
    // const type = 'meals';
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const newId = { ...local,
      [type]: { ...local[type], [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newId));
    history.push(`/${page}/${id}/in-progress`);
  }

  const buttonStart = () => {
    if (JSON.parse(getDoneRecipes()) !== []) {
      const finished = JSON.parse(getDoneRecipes())
        .some((donerecipe) => donerecipe.id === id);
      if (!finished) {
        const progress = JSON.parse(getInProgressRecipes())[type];
        const inProgress = Object.keys(progress)
          .some((progressrecipe) => progressrecipe === id);
        if (inProgress) {
          return (
            <button
              data-testid="start-recipe-btn"
              className="btn-details btn btn-danger"
              type="button"
              onClick={ () => { history.push(`/${page}/${id}/in-progress`); } }
              value="Continue Recipe"
            >
              Continue Recipe
            </button>
          );
        }
        return (<input
          data-testid="start-recipe-btn"
          className="btn-details btn btn-danger"
          type="button"
          onClick={ redirectToProgress }
          value="Start Recipe"
        />);
      }
    }
  };

  return (
    <div className="btn-div">
      {buttonStart()}
    </div>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  page: PropTypes.string,
}.isRequired;

export default Button;
