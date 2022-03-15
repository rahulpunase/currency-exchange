import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Exchanger from './Exchanger';

describe('<Exchanger />', () => {
  test('it should mount', () => {
    render(<Exchanger />);
    
    const exchanger = screen.getByTestId('Exchanger');

    expect(exchanger).toBeInTheDocument();
  });
});