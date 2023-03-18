import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginPage } from '../LoginPage';
import userEvent from '@testing-library/user-event';

// Hello, friend. Let's test the LoginPage component.
describe('LoginPage', () => {
  // First things first, we'll make sure it renders without any issues.
  test('renders without crashing', () => {
    render(<LoginPage />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  // It's important to ensure users can type their usernames. Just like our online identities, right?
  test('allows typing in the username field', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText('Username');

    userEvent.type(usernameInput, 'fsociety');
    expect(usernameInput).toHaveValue('fsociety');
  });

  // Passwords are the keys to our secrets. Let's make sure users can type them in.
  test('allows typing in the password field', () => {
    render(<LoginPage />);
    const passwordInput = screen.getByLabelText('Password');

    userEvent.type(passwordInput, 'wearefsociety');
    expect(passwordInput).toHaveValue('wearefsociety');
  });
});

