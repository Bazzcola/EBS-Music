import React from 'react';
import { render } from '@testing-library/react';
import { ControlButtons } from './ControlButtons';

it('renders ControlButtons correctly', () => {
  const { asFragment } = render(<ControlButtons />);
  expect(asFragment()).toMatchSnapshot();
});
