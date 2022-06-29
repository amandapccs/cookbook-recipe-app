import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Context } from '../../context/Provider';
import Button from '../../components/Button/Button';
import PrizesComponent from './Prizes';

import {
  MainConteiner,
  Form,
  ProfileContainer,
  ProfileImg,
  EditContainer,
  Input,
} from './styles';

import { addProfileLocalStorage } from '../../helpers/LocalStorage';

export default function Profile() {
  const { setShowSearchButton } = useContext(Context);

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');

  const readUser = JSON.parse(localStorage.getItem('user'));

  // const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // console.log(doneRecipes.length);
  // const firstPrize = 2;
  // const secondPrize = 4;
  // const thirdPrize = 6;

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

  const changeInput = ({ target }) => {
    const { id, value } = target;
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'name') {
      setName(value);
    }
    if (id === 'image') {
      setImage(value);
    }
  };

  const editar = () => setEdit(true);

  const salvar = () => {
    addProfileLocalStorage(email, image, name);
    setEdit(false);
  };

  return (
    <div>
      <Header title="Profile" />
      <MainConteiner>

        <ProfileContainer>
          { readUser.img && (
            <ProfileImg
              src={ readUser.img }
              alt="User Img"
            />
          ) }
          <h2>
            { readUser && readUser.name }
          </h2>
          <p data-testid="profile-email">
            { readUser && readUser.email }
          </p>
          <Button
            name="Edit Profile"
            onClick={ editar }
          />
        </ProfileContainer>

        {edit && (
          <EditContainer>
            <h4>Name:</h4>
            <Input
              type="text"
              id="name"
              value={ name }
              onChange={ changeInput }
              placeholder={ readUser.name || 'Name' }
            />
            <h4>Email:</h4>
            <Input
              type="text"
              id="email"
              value={ email }
              onChange={ changeInput }
              placeholder={ readUser.email || 'Email' }
            />
            <h4>Profile Image URL:</h4>
            <Input
              type="img"
              id="image"
              value={ image }
              onChange={ changeInput }
            />
            {/* </label> */}
            <Button
              name="Save?"
              onClick={ salvar }
            />
          </EditContainer>
        )}

        <Form>
          <Link to="/done-recipes">
            <Button
              name="Done Recipes"
              datatestid="profile-done-btn"
            />
          </Link>
          <Link to="/favorite-recipes">
            <Button
              datatestid="profile-favorite-btn"
              name="Favorite Recipes"
            />
          </Link>
          <Link to="/">
            <Button
              onClick={ clearStorage }
              datatestid="profile-logout-btn"
              name="Logout"
            />
          </Link>
        </Form>

        <PrizesComponent />

      </MainConteiner>
      <Footer />
    </div>
  );
}
