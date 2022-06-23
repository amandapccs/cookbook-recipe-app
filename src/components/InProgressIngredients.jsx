import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function InProgressIngredients({ data }) {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = history.location;
  const type = pathname.includes('foods') ? 'meals' : 'cocktails';
  const [isChecked, setIsChecked] = useState([]);
  const [inProgressItems, setInProgressItems] = useState(
    JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id] || [],
  );
  console.log(inProgressItems);
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
  const ingredients = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strIngredient')
    && value)));
  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value && value !== ' ')));
  useEffect(() => {
    /* const localStorageItem = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setInProgressItems(localStorageItem[type][id]); */
    console.log(inProgressItems);
    const auxArray = measures.map((_, index) => {
      if (inProgressItems.includes(index)) return true;
      return false;
    });
    setIsChecked(auxArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, inProgressItems]);
  /*  useEffect(() => {
    const auxArray = measures.map((_, index) => {
      if (inProgressItems.includes(index)) return true;
      return false;
    });
    setIsChecked(auxArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProgressItems]); */
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
              checked={ isChecked[index] }
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
