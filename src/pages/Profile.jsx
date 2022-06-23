import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/Provider';

export default function Profile() {
  const { setShowSearchButton } = useContext(Context);
  const readUser = JSON.parse(localStorage.getItem('user'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);
  return (
    <div>
      <Header title="Profile" />
      <main>
        <div data-testid="profile-email">
          { readUser.email }
        </div>
        <form>
          <button
            data-testid="profile-done-btn"
            type="button"
          >
            Done Recipes
          </button>
          <button
            data-testid="profile-favorite-btn"
            type="button"
          >
            Favorite Recipes
          </button>
          <button
            data-testid="profile-logout-btn"
            type="button"
          >
            Logout
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
