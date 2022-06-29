import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Context as RecipeContext } from '../../context/Provider';
import CardFavRecipes from '../../components/CardFavRecipes/CardFavRecipes';
import { RecipesContainer, MainContainer, ButtonsSection, Button } from './styles';

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
    <MainContainer>
      <Header title="Favorite Recipes" />
      <ButtonsSection>
        <Button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => filterDataByType('all') }
        >
          All
        </Button>
        <Button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => filterDataByType('food') }
        >
          Food
        </Button>
        <Button
          type="button"
          data-testid="filter-by-drink-btn"
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
      </RecipesContainer>
    </MainContainer>
  );
}
