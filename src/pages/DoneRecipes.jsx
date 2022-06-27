import React, { useContext, useEffect, useState } from 'react';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Header from '../components/Header';
import { Context as RecipeContext } from '../context/Provider';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredData, setFilteredData] = useState(doneRecipes);

  const { setShowSearchButton } = useContext(RecipeContext);

  function getDoneRecipesFromLocalStorage() {
    const recipes = localStorage.getItem('doneRecipes');
    const data = JSON.parse(recipes);
    if (data) {
      setDoneRecipes(data);
      setFilteredData(data);
    } else {
      setDoneRecipes([]);
    }
  }
  function filterDataByType(type) {
    if (type !== 'all') {
      setFilteredData(doneRecipes.filter((value) => value.type === type));
      return true;
    }
    setFilteredData(doneRecipes);
  }
  useEffect(() => {
    setShowSearchButton(false);
    getDoneRecipesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header title="Done Recipes" />
      <section className="container-buttons-filter">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('drink') }
        >
          Drinks
        </button>
      </section>
      {filteredData.map(
        ({
          image,
          name,
          category,
          doneDate,
          tags,
          type,
          area,
          alcoholicOrNot,
          id,
        }, index) => (
          <CardDoneRecipes
            key={ index }
            image={ image }
            name={ name }
            category={ category }
            doneDate={ doneDate }
            tags={ tags }
            index={ index }
            type={ type }
            area={ area }
            alcoholic={ alcoholicOrNot }
            id={ id }
          />),
      )}
    </div>
  );
}
export default DoneRecipes;
