import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Context } from '../context/Provider';

export default function Profile() {
  const { setShowSearchButton } = useContext(Context);
  useEffect(() => setShowSearchButton(false), []);
  return (
    <div>
      <Header title="Profile" />
      <Footer />
    </div>
  );
}
