import React, { useContext, useEffect, useState } from 'react';
import CardDoneRecipes from '../../components/CardDoneRecipes/CardDoneRecipes';
import Header from '../../components/Header';
import { Context as RecipeContext } from '../../context/Provider';
import {
  Button,
  ButtonsSection,
  MainContainer,
  RecipesContainer }
from './styles';

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
    <MainContainer>
      <Header title="Done Recipes" />
      <ButtonsSection>
        <Button
          type="button"
          data-testid="filter-by-all-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('all') }
        >
          All
        </Button>
        <Button
          type="button"
          data-testid="filter-by-food-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('food') }
        >
          Food
        </Button>
        <Button
          type="button"
          data-testid="filter-by-drink-btn"
          className="btn-filter-type"
          onClick={ () => filterDataByType('drink') }
        >
          Drinks
        </Button>
      </ButtonsSection>
      <RecipesContainer>
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
            <CardDoneRecipes
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
      </RecipesContainer>
    </MainContainer>
  );
}
export default DoneRecipes;
