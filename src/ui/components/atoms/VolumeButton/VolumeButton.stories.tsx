import React from 'react';
import { VolumeButton } from 'ui/components/atoms/VolumeButton/VolumeButton';
import { ProviderAudioContext } from 'ui/context/audioContext';
export default {
  title: 'Atoms/VolumeButton',
  component: VolumeButton
};

export const Button6 = () => {
  return (
    <ProviderAudioContext>
      <VolumeButton />
    </ProviderAudioContext>
  );
};
