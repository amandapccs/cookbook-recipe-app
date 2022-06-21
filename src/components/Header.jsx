import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../context/Provider';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

export default function Header({ title }) {
  const { showSearchButton } = useContext(Context);
  const [showSearchInput, setShowSeachInput] = useState(false);
  return (
    <div className="header-container">
      <Link
        to="/profile"
      >
        <img src={ profileIcon } alt="Profile icon" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">{title}</h2>

      { showSearchButton && (
        <button
          type="button"
          onClick={ () => setShowSeachInput(!showSearchInput) }
        >
          <img src={ searchIcon } alt="Search icon" data-testid="search-top-btn" />
        </button>
      )}
      { showSearchInput && (
        <input
          type="text"
          placeholder="Search Input"
          data-testid="search-input"
        />
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
