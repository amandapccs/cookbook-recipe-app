import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';

import {
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_EMAIL_0,
  INVALID_EMAIL_1,
  INVALID_EMAIL_2,
  INVALID_EMAIL_3,
  INVALID_PASSWORD,
} from './helpers/constants';

describe('Teste page Login', () => {
  // beforeEach(() => {
  //   localStorage.clear();
  //   jest.restoreAllMocks();
  // });

  it('A rota para a página deve ser "/".', () => {
    const { history } = renderWithRouter(<Login />);
    expect(history.location.pathname).toBe('/');
  });

  it('O botão deve está desabilitado', () => {
    render(<Login />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { value: 'Enter' });

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, INVALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_0);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_1);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_2);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_3);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeEnabled();
  });

  it('A rota deve ser mudada para \'/foods\' após o clique no botão "Enter".', () => {
    const { history } = renderWithRouter(<Login />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByText(/Enter/i);

    expect(button.disabled).toBe(true);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);

    expect(button.disabled).toBe(false);

    userEvent.click(button);

    expect(history.location.pathname).toBe('/foods');
  });
});
