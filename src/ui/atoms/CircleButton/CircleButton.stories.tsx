import React, { useState } from 'react';
import { CircleButton, ButtonProps } from './CircleButton';
export default {
  title: 'Atoms/CircleButton',
  component: CircleButton
};

export const Button2: React.FC<ButtonProps> = () => {
  const classType = 'circle_button';
  const [active, setActive] = useState<boolean>(false);
  const changes = () => {
    setActive(!active);
  };
  return <CircleButton active={active} click={changes} classType={classType} />;
};
