import React from 'react';
import { render } from '@testing-library/react';
import { PlayerButtons } from './PlayerButtons';

it('renders PlayerButtons correctly', () => {
  const { asFragment } = render(<PlayerButtons />);
  expect(asFragment()).toMatchSnapshot();
});
