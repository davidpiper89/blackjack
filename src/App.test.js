import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

// App component test
describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText("Piper's BlackJack")).toBeInTheDocument();
  });
});
