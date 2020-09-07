import React from 'react';
import { TrackList } from './TrackList';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Molecules/TrackList',
  component: TrackList
};

export const Track = () => {
  return (
    <MemoryRouter>
      <TrackList />
    </MemoryRouter>
  );
};
