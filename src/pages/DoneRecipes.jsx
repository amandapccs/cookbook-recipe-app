import React, { useContext, useEffect, useState } from 'react';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Header from '../components/Header';
import { Context as RecipeContext } from '../context/Provider';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  /* const [filteredData, setFilteredData] = useState(doneRecipes); */

  const { setShowSearchButton } = useContext(RecipeContext);

  function getDoneRecipesFromLocalStorage() {
    const recipes = localStorage.getItem('doneRecipes');
    const data = JSON.parse(recipes);
    if (data) {
      setDoneRecipes(data);
    }
  }

  useEffect(() => {
    setShowSearchButton(false);
    getDoneRecipesFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header title="Done Recipes" />
      {doneRecipes.map(
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
