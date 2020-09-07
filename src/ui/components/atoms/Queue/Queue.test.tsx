import React from 'react';
import { render } from '@testing-library/react';
import { Queue } from './Queue';
const queue_img =
  'https://akket.com/wp-content/uploads/2019/11/World-of-Warcraft-Shadowlands-Blizzard.jpg';
it('renders queue correctly', () => {
  const { asFragment } = render(<Queue img={queue_img} />);
  expect(asFragment()).toMatchSnapshot();
});
