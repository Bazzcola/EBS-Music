import React, { useState } from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

export const Button1: React.FC<ButtonProps> = () => {
  const [active, setActive] = useState<boolean>(false);
  const changes = () => {
    setActive(!active);
  };
  return <Button click={changes} active={active} />;
};
// export const Button1 = ({ children }: any): React.ReactElement => (
//   <Button>{children}</Button>
// );
