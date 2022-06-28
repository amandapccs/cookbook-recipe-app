import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../../context/Provider';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './Header.css';
import {
  HeaderContainer,
  HeaderMain,
  Image,
  Title,
  BtnSearch,
  Span,
  FilterInput,
} from './styles';

export default function Header({ title }) {
  const { showSearchButton, setFetchedFoodOrDrink,
    fetchedFoodOrDrink } = useContext(Context);
  const history = useHistory();
  const [showSearchInput, setShowSeachInput] = useState(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const FIRST_LETTER = 'first-letter';
  // const [fetchedResults, setFetchedResults] = useState();
  // const [fetchedFoodOrDrink, setFetchedFoodOrDrink] = useState([]);

  const getDrinkEndpoint = () => {
    const ingredientEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputValue}`;
    const nameEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
    const firstLetterEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInputValue}`;

    if (selectedRadioOption === 'ingredient') {
      return ingredientEndpoint;
    }
    if (selectedRadioOption === 'name') {
      return nameEndpoint;
    }
    if (selectedRadioOption === 'first-letter') {
      if (searchInputValue.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      return firstLetterEndpoint;
    }
  };

  const getFoodEndpoint = () => {
    const ingredientEndpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputValue}`;
    const nameEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
    const firstLetterEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`;

    if (selectedRadioOption === 'ingredient') {
      return ingredientEndpoint;
    }
    if (selectedRadioOption === 'name') {
      return nameEndpoint;
    }
    if (selectedRadioOption === FIRST_LETTER) {
      return firstLetterEndpoint;
    }
  };

  const showAlertNoResults = (results) => {
    if (!results) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const fetchMealOrDrink = () => {
    if (selectedRadioOption === FIRST_LETTER && searchInputValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }

    if (title === 'Foods') {
      const foodEndpoint = getFoodEndpoint();
      const fetchFoods = async () => {
        const fetchedFoods = await fetch(foodEndpoint);
        const responseFoods = await fetchedFoods.json();
        showAlertNoResults(responseFoods.meals);
        setFetchedFoodOrDrink(responseFoods.meals || []);
      };
      fetchFoods();
    }

    if (title === 'Drinks') {
      const drinksEndpoint = getDrinkEndpoint();
      const fetchDrinks = async () => {
        const fetchedFoods = await fetch(drinksEndpoint);
        const responseFoods = await fetchedFoods.json();
        showAlertNoResults(responseFoods.drinks);
        setFetchedFoodOrDrink(responseFoods.drinks || []);
      };
      fetchDrinks();
    }
  };

  const searchFood = () => {
    fetchMealOrDrink();
  };

  useEffect(() => {
    if (fetchedFoodOrDrink.length === 1) {
      const findIdObject = fetchedFoodOrDrink
        .find((mealOrDrink) => mealOrDrink.idMeal || mealOrDrink.idDrink);
      const findId = Object.values(findIdObject);

      if (title === 'Foods') {
        history.push(`/foods/${findId[0]}`);
      } else {
        history.push(`/drinks/${findId[0]}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedFoodOrDrink]);

  return (
    <HeaderContainer>
      <HeaderMain>
        <Link
          to="/profile"
        >
          <Image src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
        </Link>
        <Title data-testid="page-title">{title}</Title>

        { showSearchButton && (
          <button
            type="button"
            className="search-btn"
            onClick={ () => setShowSeachInput(!showSearchInput) }
          >
            <Image src={ searchIcon } alt="Search icon" data-testid="search-top-btn" />
          </button>
        )}
      </HeaderMain>
      <div className="header-search">
        { showSearchInput && (
          <>
            <FilterInput
              type="text"
              className="search-input"
              value={ searchInputValue }
              onChange={ ({ target }) => setSearchInputValue(target.value) }
              placeholder="Search Input"
              data-testid="search-input"
            />

            <div className="radio-inputs">
              <label htmlFor="ingredient">
                <input
                  type="radio"
                  name="search"
                  id="ingredient"
                  value="ingredient"
                  onClick={ ({ target }) => setSelectedRadioOption(target.value) }
                  data-testid="ingredient-search-radio"
                />
                <Span>Ingredient</Span>
              </label>
              <label htmlFor="name">
                <input
                  type="radio"
                  name="search"
                  id="name"
                  value="name"
                  onClick={ ({ target }) => setSelectedRadioOption(target.value) }
                  data-testid="name-search-radio"
                />
                <Span>Name</Span>
              </label>
              <label htmlFor="first-letter">
                <input
                  type="radio"
                  name="search"
                  id="first-letter"
                  value="first-letter"
                  onClick={ ({ target }) => setSelectedRadioOption(target.value) }
                  data-testid="first-letter-search-radio"
                />
                <Span>First Letter</Span>
              </label>
            </div>

            <BtnSearch
              type="button"
              onClick={ searchFood }
              data-testid="exec-search-btn"
            >
              Search
            </BtnSearch>
          </>
        )}
      </div>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
