import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button/Button';
import { Context } from '../../context/Provider';
import MainConteiner from './styles';

export default function Explore() {
  const { setShowSearchButton } = useContext(Context);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setShowSearchButton(false), []);

  const history = useHistory();
  return (
    <div>
      <Header title="Explore" />
      <MainConteiner>
        <Button
          name="Explore Foods"
          datatestid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        />
        <Button
          name="Explore Drinks"
          datatestid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        />
      </MainConteiner>

      <Footer />
    </div>
  );
}
