import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context as RecipeContext } from '../context/Provider';
import {
  fetchApiDrinksCategory,
  fetchApiFoodsCategory,
  fetchFoodByCategory,
  fetchDrinksByCategory,
} from '../helpers/API';

function CategorySearch({ curCategory }) {
  const {
    category,
    setCategory,
    setCategoryFoodsOrDrinks,
    setToggle,
    toggle,
  } = useContext(RecipeContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const MAX_CATEGORY = 5;

  async function fetchCategory() {
    let resultApi = [];
    if (curCategory === 'foods') {
      resultApi = await fetchApiFoodsCategory();
    } else {
      resultApi = await fetchApiDrinksCategory();
    }
    setCategory(resultApi.slice(0, MAX_CATEGORY));
  }

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleClick({ target: { id } }) {
    let resultApi = [];
    if (curCategory === 'foods') {
      resultApi = await fetchFoodByCategory(id);
    } else {
      resultApi = await fetchDrinksByCategory(id);
    }
    setCategoryFoodsOrDrinks(resultApi);
    if (selectedCategory === id || selectedCategory === '') {
      setToggle(!toggle);
    }
    setSelectedCategory(id);
  }

  return (
    <div>
      {category.map((eachCategory) => (
        <button
          id={ eachCategory.strCategory }
          type="button"
          onClick={ (event) => handleClick(event) }
          data-testid={ `${eachCategory.strCategory}-category-filter` }
          key={ eachCategory.strCategory }
        >
          {eachCategory.strCategory}
        </button>
      ))}
    </div>
  );
}

CategorySearch.propTypes = {
  curCategory: PropTypes.string,
}.required;

export default CategorySearch;
