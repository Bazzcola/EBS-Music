import React from 'react';
import { render } from '@testing-library/react';
import { MusicBar } from './MusicBar';

it('renders MusicBar correctly', () => {
  const { asFragment } = render(<MusicBar />);
  expect(asFragment()).toMatchSnapshot();
});
