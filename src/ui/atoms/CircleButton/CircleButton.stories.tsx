import React from 'react';
import { CircleButton, ButtonProps } from './CircleButton';
export default {
  title: 'Atoms/CircleButton',
  component: CircleButton
};

export const Button2: React.FC<ButtonProps> = () => {
  const classType = 'circle_button';
  return <CircleButton classType={classType} />;
};
