import React, { useState, useHistory } from 'react';
import addEmailLocalStorage from '../helpers/LocalStorage';

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
    // salvar dois tokens
    addEmailLocalStorage(email);
    history.push('/main');
  };

  return (
    <div>
      <label htmlFor="name">
        Email:
        <input
          required
          data-testid="email-input"
          id="email"
          type="email"
          value={ email }
          onChange={ changeInput }
        />
      </label>
      <label htmlFor="email">
        Senha:
        <input
          required
          data-testid="password-input"
          className="form-control"
          id="password"
          type="password"
          value={ password }
          onChange={ changeInput }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="button"
        onClick={ onClickButton }
        disabled={ buttonDisabled }
      >
        Enter
      </button>
    </div>
  );
}
