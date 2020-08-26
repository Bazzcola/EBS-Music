import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ProgressBar } from 'ui/molecules/ProgressBar/ProgressBar';
import { ProviderAudioContext } from 'ui/context/audioContext';

ReactDOM.render(
  <React.StrictMode>
    <ProviderAudioContext>
      <ProgressBar />
    </ProviderAudioContext>
  </React.StrictMode>,
  document.getElementById('root')
);
