import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/Provider';

export default function Profile() {
  const { setShowSearchButton } = useContext(Context);
  const readUser = JSON.parse(localStorage.getItem('user'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);
  const clearStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <div>
      <Header title="Profile" />
      <main>
        <div data-testid="profile-email">
          { readUser && readUser.email }
        </div>
        <form>
          <Link to="/done-recipes">
            <button
              data-testid="profile-done-btn"
              type="button"
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button
              data-testid="profile-favorite-btn"
              type="button"
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={ clearStorage }
              data-testid="profile-logout-btn"
              type="button"
            >
              Logout
            </button>
          </Link>
        </form>
      </main>
      <Footer />
    </div>
  );
}
