import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [fetchedFoodOrDrink, setFetchedFoodOrDrink] = useState([]);
  const [category, setCategory] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [categoryFoodsOrDrinks, setCategoryFoodsOrDrinks] = useState([]);

  const contextValue = {
    showSearchButton,
    setShowSearchButton,
    fetchedFoodOrDrink,
    setFetchedFoodOrDrink,
    category,
    setCategory,
    toggle,
    setToggle,
    categoryFoodsOrDrinks,
    setCategoryFoodsOrDrinks,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
