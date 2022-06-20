import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        Profile
      </button>
      <h1 data-testid="page-title">{title}</h1>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        Search
      </button>
      {/* <input
        type="text"
        placeholder="Search Input"
        data-testid="search-input"
      /> */}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
