import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function InProgressIngredients({ data }) {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = history.location;
  const type = pathname.includes('foods') ? 'meals' : 'cocktails';
  const localStg = JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id] || [];
  const [inProgressItems, setInProgressItems] = useState(localStg);

  const onChange = (index) => {
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const newId = { ...local,
      [type]: { ...local[type], [id]: [index] } };

    if (!local[type][id]) {
      setInProgressItems([index]);
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newId));
    }

    if (inProgressItems.includes(index)) {
      const filteredItems = inProgressItems.filter((i) => i !== index);
      setInProgressItems(filteredItems);
      const newItems = { ...local,
        [type]: { ...local[type], [id]: filteredItems } };
      return localStorage.setItem('inProgressRecipes', JSON.stringify(newItems));
    }

    setInProgressItems([...inProgressItems, index]);
    const newIngredient = { ...local,
      [type]: { ...local[type], [id]: [...local[type][id], index] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newIngredient));
  };

  const ingredients = Object.keys(data).filter((key) => key.includes('strIngredient'))
    .map((item) => data[item]).filter((ingr) => ingr);

  // const ingredients = Object.values(Object.fromEntries(Object.entries(data)
  //   .filter(([key, value]) => key.includes('strIngredient')
  //   && value)));
  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value && value !== ' ')));

  return (
    <div>
      { measures.map((measure, index) => (
        <div
          className="in-progress-checkboxs"
          key={ `${ingredients[index]} - ${index}}` }
        >
          <label
            htmlFor={ ingredients[index] }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              checked={ localStg.includes(index) }
              onChange={ () => onChange(index) }
              id={ ingredients[index] }
            />
            {`${measure} - ${ingredients[index]}`}
          </label>
        </div>
      ))}
    </div>
  );
}
InProgressIngredients.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default InProgressIngredients;
