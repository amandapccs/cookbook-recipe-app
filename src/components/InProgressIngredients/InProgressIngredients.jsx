/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Context as RecipeContext } from '../../context/Provider';
import {
  InstructionsContainer,
  // FoodIngredients,
  // Checkbox,
  CheckboxDiv,
  CheckboxInput,
  CheckboxLabel,
  CheckboxSvg,
  CheckboxPath,
  CheckboxSpan }
from './styles';

function InProgressIngredients({ data }) {
  const { setIsDisabled } = useContext(RecipeContext);
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = history.location;
  const type = pathname.includes('foods') ? 'meals' : 'cocktails';
  const localStg = JSON.parse(localStorage.getItem('inProgressRecipes'))[type][id] || [];
  const [inProgressItems, setInProgressItems] = useState(localStg);

  const ingredients = Object.keys(data).filter((key) => key.includes('strIngredient'))
    .map((item) => data[item]).filter((ingr) => ingr);

  const measures = Object.values(Object.fromEntries(Object.entries(data)
    .filter(([key, value]) => key.includes('strMeasure')
    && value && value !== ' ')));

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

  useEffect(() => {
    if (localStg.length === ingredients.length) return setIsDisabled(false);
    setIsDisabled(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStg]);

  return (
    <InstructionsContainer>
      { measures.map((measure, index) => (
        <CheckboxDiv key={ `${ingredients[index]} - ${index}}` }>
          <CheckboxInput type="checkbox" id={ ingredients[index] } checked={ localStg.includes(index) } onChange={ () => onChange(index) } />
          <CheckboxLabel
            htmlFor={ ingredients[index] }
          >
            <CheckboxSvg width="500" height="50" viewBox="0 0 500 100">
              <rect x="-60" y="0" width="50" height="50" stroke="black" fill="none" />
              <g transform="translate(0,-972.36216)">
                <CheckboxPath
                  d="m -50,1010 c 7,9 16,-43 20,-31 0.19,0.60 -7,35 -5,33 2,-2 26,-33 27,-32 3,3 -18,29 -12,32 12,6 20,-41 30,-31 7,7 -15,37 -6,31 9,-6 13,-22 23,-27 8,-4 -10,34 -2,28 2,-1 26,-28 30,-25 2,2 -11,16 -8,22 1,3 29,-17 29,-20 0,-7 -8,16 -4,23 3,6 21,-25 24,-25 6,0 -5,27 -2,21 4,-9 23,-33 23,-22 0,9 -16,28 -6,28 5,0 17,-14 21,-18 14,-15 11,-12 7,4 -0,3 -1,16 -1,12 0,-9 13,-24 21,-28 0,-0.36 -6,27 -2,28 9,3 26,-22 32,-28 5,-6 -3,29 3,25 5,-3 18,-27 26,-27 0.89,0 -9,22 -5,26 4,4 24,-17 29,-20 3,-1.63 -7,14 -4,18 2,2 16,-19 18,-21 1,-1 -9,24 7,11 4,-3 14,-15 21,-15 1,0 -17,37 -3,24 30,-28 -17,12 9,-10 23,-20 0.90,9 12,7 19,-4 16,-28 16,5 0,7 7,-17 15,-17 1,0 -1,17 -0.96,17 5,-2 14,-19 20,-19 1,0 -3,11 -1,13 5,6.1 19,-24 19,-16 0,1 -5,17 -3,17 1,0 12,-12 12,-11 0.50,2 -1,12 0.96,13 12,4 14,-30 14,-1 "
                  fill="none"
                  stroke="black"
                  className="path2"
                  strokeWidth="3"
                />
              </g>
            </CheckboxSvg>
            <CheckboxSpan>{`${measure} - ${ingredients[index]}`}</CheckboxSpan>
          </CheckboxLabel>
        </CheckboxDiv>
      ))}
    </InstructionsContainer>
  );
}
InProgressIngredients.propTypes = {
  data: PropTypes.string,
}.isRequired;

export default InProgressIngredients;
