import React from 'react';
import { render } from '@testing-library/react';
import { VolumeBar } from './VolumeBar';

it('renders VolumeBar correctly', () => {
  const { asFragment } = render(<VolumeBar />);
  expect(asFragment()).toMatchSnapshot();
});
