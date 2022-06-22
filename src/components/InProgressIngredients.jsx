import PropTypes from 'prop-types';
import React from 'react';

function InProgressIngredients({ data }) {
  const ingredients = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strIngredient')
    && value)));
  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value)));

  // const handleChange = (index) => {
  //   if (index === )
  // }

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
