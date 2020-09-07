import React from 'react';
import { render } from '@testing-library/react';
import { PrevButton } from './PrevButton';

it('render PrevButton correct', () => {
  const button = () => {
    render(<PrevButton />);
  };
  expect(button).toMatchSnapshot();
});
