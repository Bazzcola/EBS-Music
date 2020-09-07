import React from 'react';
import { Profile } from 'ui/components/molecules/Profile/Profile';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Molecules/Profile',
  component: Profile
};

export const Profile1 = () => {
  return (
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
};
