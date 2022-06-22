import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/Provider';

export default function ExploreFoodsByIngredients() {
  const { setShowSearchButton } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);
  return (
    <div>
      <Header title="Explore Ingredients" />
      <Footer />
    </div>
  );
}
