import React from 'react';
import { render } from '@testing-library/react';
import { VolumeButton } from './VolumeButton';

it('renders VolumeButton correctly', () => {
  const { asFragment } = render(<VolumeButton />);
  expect(asFragment()).toMatchSnapshot();
});
