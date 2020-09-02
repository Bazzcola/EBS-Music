import React from 'react';
import { Queue } from 'ui/components/atoms/Queue/Queue';
export default {
  title: 'Atoms/Queue',
  component: Queue
};

export const Button7 = () => {
  const img =
    'https://akket.com/wp-content/uploads/2019/11/World-of-Warcraft-Shadowlands-Blizzard.jpg';
  return <Queue img={img} />;
};
