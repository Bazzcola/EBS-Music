import React, { useState, useContext, useEffect } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import './PlayButton.scss';

export const PlayButton = () => {
  const [active, setActive] = useState<boolean>(true);
  const { playing, audioFiles } = useContext(AudioContext);
  const { setPlaying } = useContext(AudioContext);
  const changes = () => {
    if (audioFiles) {
      setActive(!active);
    } else {
      return;
    }
    if (active) {
      setPlaying(true);
      console.log('play');
    } else {
      setPlaying(false);
      console.log('pause');
    }
  };
  useEffect(() => {
    if (playing) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [playing]);
  return (
    <button onClick={changes} className="play_button">
      {active ? (
        <svg className="svg_playbtn" viewBox="0 0 12 12">
          <path d="M2.5.5v11l9-5.5z"></path>
        </svg>
      ) : (
        <svg className="svg_stopbtn" viewBox="0 0 12 12">
          <path d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5zM7 .5a.5.5 0 0 1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 7 11.5V.5z"></path>
        </svg>
      )}
    </button>
  );
};
