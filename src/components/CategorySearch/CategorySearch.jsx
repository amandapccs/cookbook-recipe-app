import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context as RecipeContext } from '../../context/Provider';
import {
  fetchApiDrinksCategory,
  fetchApiFoodsCategory,
  fetchFoodByCategory,
  fetchDrinksByCategory,
} from '../../helpers/API';
import { Div, Button } from './styles';

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
    if (curCategory === 'foods') resultApi = await fetchApiFoodsCategory();
    else resultApi = await fetchApiDrinksCategory();
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
      if (toggle) return setSelectedCategory('');
      setSelectedCategory(id);
    }
    if (selectedCategory !== id) {
      if (!toggle) return setToggle(!toggle);
      setSelectedCategory(id);
    }
  }
  function handleAllClick() {
    if (toggle) setToggle(!toggle);
    setSelectedCategory('');
  }
  return (
    <Div>
      <Button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleAllClick() }
        primary={ selectedCategory === '' }
      >
        All
      </Button>
      {category.map((eachCategory) => (
        <Button
          key={ eachCategory.strCategory }
          id={ eachCategory.strCategory }
          type="button"
          onClick={ (event) => handleClick(event) }
          data-testid={ `${eachCategory.strCategory}-category-filter` }
          primary={ selectedCategory === eachCategory.strCategory || false }
        >
          {eachCategory.strCategory}
        </Button>
      ))}
    </Div>
  );
}

CategorySearch.propTypes = {
  curCategory: PropTypes.string,
}.required;

export default CategorySearch;
