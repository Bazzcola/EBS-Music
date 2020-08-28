import React from 'react';
import { RepeatButton, ButtonProps } from 'ui/atoms/RepeatButton/RepeatButton';
export default {
  title: 'Atoms/RepeatButton',
  component: RepeatButton
};

export const Button5: React.FC<ButtonProps> = () => {
  const path = "M8.667 9.214H8V10.5L5.333 8.571V8.25c0-.178.149-.321.334-.321h3c1.104 0 2-.864 2-1.929 0-1.066-.896-1.929-2-1.929h-.334A.327.327 0 0 1 8 3.75v-.643c0-.178.148-.321.333-.321h.334C10.507 2.786 12 4.225 12 6s-1.493 3.214-3.333 3.214zM6.333 4.071h-3c-1.105 0-2 .863-2 1.929 0 1.065.895 1.929 2 1.929h.334c.183 0 .333.143.333.321v.643c0 .177-.15.321-.333.321h-.334C1.493 9.214 0 7.775 0 6s1.493-3.214 3.333-3.214H4V1.5l2.667 1.929v.321c0 .177-.15.321-.334.321z"
  return <RepeatButton svg={path} />;
};