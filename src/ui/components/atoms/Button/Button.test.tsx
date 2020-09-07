import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

it('render button correct', () => {
  const button = () => {
    render(<Button />);
  };
  expect(button).toMatchSnapshot();
});
