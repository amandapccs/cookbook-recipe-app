import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchApiDrinksCategory, fetchApiFoodsCategory } from '../helpers/API';
import { Context as RecipeContext } from '../context/Provider';

function CategorySearch({ curCategory }) {
  const { category, setCategory } = useContext(RecipeContext);
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

  function handleClick() {}

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
          teste
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
