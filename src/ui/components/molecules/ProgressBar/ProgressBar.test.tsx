import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

it('renders ProgressBar correctly', () => {
  const { asFragment } = render(<ProgressBar />);
  expect(asFragment()).toMatchSnapshot();
});
