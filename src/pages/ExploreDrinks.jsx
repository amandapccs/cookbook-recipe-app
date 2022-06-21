import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Context } from '../context/Provider';

export default function ExploreDrinks() {
  const { setShowSearchButton } = useContext(Context);
  useEffect(() => setShowSearchButton(false), []);
  return (
    <div>
      <Header title="Explore Drinks" />
    </div>
  );
}
