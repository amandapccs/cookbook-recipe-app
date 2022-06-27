import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { Context as RecipeContext } from '../context/Provider';
import CardFavRecipes from '../components/CardFavRecipes';
// import FilterButtonsFav from '../components/FilterButtonsFav';

export default function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredData, setFilteredData] = useState(favoriteRecipes);
  const recipes = localStorage.getItem('favoriteRecipes');

  const { setShowSearchButton } = useContext(RecipeContext);

  function getFavRecipesFromLocalStorage() {
    const data = JSON.parse(recipes);
    if (data) {
      setFavoriteRecipes(data);
      setFilteredData(data);
    } else {
      setFavoriteRecipes([]);
    }
  }

  function filterDataByType(type) {
    if (type !== 'all') {
      setFilteredData(favoriteRecipes.filter((value) => value.type === type));
      return true;
    }
    setFilteredData(favoriteRecipes);
  }

  useEffect(() => {
    setShowSearchButton(false);
    getFavRecipesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header title="Favorite Recipes" />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => filterDataByType('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterDataByType('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => filterDataByType('drink') }
        >
          Drinks
        </button>
      </div>
      {filteredData.map(
        ({
          image,
          name,
          category,
          doneDate,
          tags,
          type,
          nationality,
          alcoholicOrNot,
          id,
        }, index) => (
          <CardFavRecipes
            key={ index }
            image={ image }
            name={ name }
            category={ category }
            doneDate={ doneDate }
            tags={ tags }
            index={ index }
            type={ type }
            area={ nationality }
            alcoholic={ alcoholicOrNot }
            id={ id }
            setFilteredData={ setFilteredData }
          />),
      )}
    </div>
  );
}
