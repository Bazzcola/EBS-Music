import React, { useState, useContext, useEffect } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import './CircleButton.scss';

export type ButtonProps = {
  type?: string;
  classType?: string;
  src?: string;
  id?: number;
};

export const CircleButton = (props: ButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { audioFiles, setAudioFiles } = useContext(AudioContext);
  const { playing, setPlaying } = useContext(AudioContext);
  const { setCurrentSong, setCounter } = useContext(AudioContext);
  const changes = () => {
    setActive(!active);
    if (!active) {
      setAudioFiles(props.src);
      if (props.id) {
        setCounter(props.id - 1);
      }
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (audioFiles === props.src) {
      setCurrentSong(true);
    }
  }, [audioFiles]);
  useEffect(() => {
    if (audioFiles !== props.src) {
      setActive(false);
    }
    if (playing === false) {
      setActive(false);
    }
  }, [audioFiles, playing]);
  return (
    <button
      onClick={changes}
      className={`circle_button circle_button_${props.type}`}
    >
      {active ? (
        <svg
          className={`svg_play svg_play_${props.classType}`}
          viewBox="0 0 12 12"
        >
          <path d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5zM7 .5a.5.5 0 0 1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 7 11.5V.5z"></path>
        </svg>
      ) : (
        <svg
          className={`svg_stop svg_stop_${props.classType}`}
          viewBox="0 0 12 12"
        >
          <path d="M2.5.5v11l9-5.5z"></path>
        </svg>
      )}
    </button>
  );
};
