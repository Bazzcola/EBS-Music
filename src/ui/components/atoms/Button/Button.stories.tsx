import React from 'react';
import { Button } from './Button';
import { ProviderAudioContext } from 'ui/context/audioContext';
export default {
  title: 'Atoms/Button',
  component: Button
};

export const Button1 = (): React.ReactNode => {
  return (
    <ProviderAudioContext>
      <Button />
    </ProviderAudioContext>
  );
};
