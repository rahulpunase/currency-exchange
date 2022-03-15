import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExchangeComponent from './ExchangeComponent';

describe('<ExchangeComponent />', () => {
  test('it should mount', () => {
    render(<ExchangeComponent />);
    
    const exchangeComponent = screen.getByTestId('ExchangeComponent');

    expect(exchangeComponent).toBeInTheDocument();
  });
});