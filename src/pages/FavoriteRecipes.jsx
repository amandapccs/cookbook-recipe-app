import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { Context as RecipeContext } from '../context/Provider';
import CardFavRecipes from '../components/CardFavRecipes';
import FilterButtonsFav from '../components/FilterButtonsFav';

export default function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const recipes = localStorage.getItem('favoriteRecipes');
  /* const [filteredData, setFilteredData] = useState(doneRecipes); */

  const { setShowSearchButton } = useContext(RecipeContext);

  function getFavRecipesFromLocalStorage() {
    const data = JSON.parse(recipes);
    if (data) {
      setFavoriteRecipes(data);
    }
  }

  useEffect(() => {
    setShowSearchButton(false);
    getFavRecipesFromLocalStorage();
    console.log('oi');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);
  return (
    <div>
      <Header title="Favorite Recipes" />
      <FilterButtonsFav />
      {favoriteRecipes.map(
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
          />),
      )}
    </div>
  );
}
