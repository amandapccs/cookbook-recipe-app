import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addMealsToken,
  addCocktailsToken,
  addEmailLocalStorage } from '../helpers/LocalStorage';
import rockGlass from '../images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

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
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (emailValidation() && passwordValidation()) {
      setButtonDisabled(false);
    }
  };

  const onClickButton = () => {
    addMealsToken(1);
    addCocktailsToken(1);
    addEmailLocalStorage(email);
    history.push('/foods');
  };

  return (

    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>

      <form className="loginForm">
        <input
          required
          data-testid="email-input"
          className="form-control"
          id="email"
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ changeInput }
        />

        <input
          required
          data-testid="password-input"
          className="form-control"
          id="password"
          type="password"
          placeholder="Senha"
          value={ password }
          onChange={ changeInput }
        />

        <button
          data-testid="login-submit-btn"
          type="button"
          className="btn btn-danger form-control"
          onClick={ onClickButton }
          disabled={ buttonDisabled }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
