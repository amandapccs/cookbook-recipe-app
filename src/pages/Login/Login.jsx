import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addMealsToken,
  addCocktailsToken,
  addEmailLocalStorage } from '../../helpers/LocalStorage';
import CookBook from '../../images/CookBook.png';
import {
  MainContainer,
  LogoContainer,
  LogoImg,
  FormContainer,
  InputLogin,
  ButtonLogin,
} from './styles';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const emailValidation = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email || regex.test(email) === false) {
      return false;
    }

    return true;
  };

  const passwordValidation = () => {
    const minLength = 6;
    if (password.length < minLength) {
      return false;
    }

    return true;
  };

  const changeInput = ({ target }) => {
    const { id, value } = target;
    if (id === 'email') {
      setEmail(value);
      setButtonDisabled(true);
      if (emailValidation() && passwordValidation()) {
        setButtonDisabled(false);
      }
    }
    if (id === 'password') {
      setPassword(value);
      setButtonDisabled(true);
      if (emailValidation() && passwordValidation()) {
        setButtonDisabled(false);
      }
    }
  };

  const onClickButton = () => {
    addMealsToken(1);
    addCocktailsToken(1);
    addEmailLocalStorage(email);
    history.push('/foods');
  };

  return (

    <MainContainer className="meals">
      <LogoContainer>
        <LogoImg src={ CookBook } alt="CookBookLogo" />
      </LogoContainer>
      <FormContainer>
        <InputLogin
          required
          data-testid="email-input"
          id="email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ changeInput }
        />

        <InputLogin
          required
          data-testid="password-input"
          id="password"
          type="password"
          placeholder="Senha"
          value={ password }
          onChange={ changeInput }
        />
        <ButtonLogin
          data-testid="login-submit-btn"
          type="button"
          onClick={ onClickButton }
          disabled={ buttonDisabled }
        >
          Enter
        </ButtonLogin>
      </FormContainer>
    </MainContainer>
  );
}
