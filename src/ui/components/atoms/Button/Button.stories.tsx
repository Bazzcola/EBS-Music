import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

export const Button1: React.FC<ButtonProps> = () => {
  return <Button />;
};
