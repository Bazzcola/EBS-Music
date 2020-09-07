import React from 'react';
import { ControlButtons } from 'ui/components/molecules/ControlButtons/ControlButtons';
import { ProviderAudioContext } from 'ui/context/audioContext';
export default {
  title: 'Molecules/ControlButtons',
  component: ControlButtons
};
export const ControlButtons1 = () => {
  return (
    <ProviderAudioContext>
      <ControlButtons />
    </ProviderAudioContext>
  );
};
