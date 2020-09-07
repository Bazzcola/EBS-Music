import React from 'react';
import { render } from '@testing-library/react';
import { TrackList } from './TrackList';
import { MemoryRouter } from 'react-router-dom';

it('renders TrackList correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <TrackList />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
