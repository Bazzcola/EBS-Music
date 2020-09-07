import React from 'react';
import { render } from '@testing-library/react';
import { Profile } from './Profile';
import { MemoryRouter } from 'react-router-dom';

it('renders Profile correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
