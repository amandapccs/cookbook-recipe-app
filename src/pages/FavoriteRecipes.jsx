import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Context } from '../context/Provider';

export default function FavoriteRecipes() {
  const { setShowSearchButton } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);
  return (
    <div>
      <Header title="Favorite Recipes" />
    </div>
  );
}
