import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  const [showSearchButton, setShowSearchButton] = useState(true);

  const contextValue = { showSearchButton, setShowSearchButton };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
