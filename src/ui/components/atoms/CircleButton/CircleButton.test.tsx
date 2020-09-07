import React from 'react';
import { render } from '@testing-library/react';
import { CircleButton } from './CircleButton';

it('render CircleButton correct', () => {
  const button = () => {
    render(<CircleButton />);
  };
  expect(button).toMatchSnapshot();
});
