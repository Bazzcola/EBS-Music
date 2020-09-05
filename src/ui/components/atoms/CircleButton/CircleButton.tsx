import React, { useState, useContext, useEffect } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import './CircleButton.scss';

export type ButtonProps = {
  type?: string;
  classType?: string;
  src?: string;
  id?: number;
  black?: string;
};

export const CircleButton = (props: ButtonProps) => {
  const { audioFiles, setAudioFiles } = useContext(AudioContext);
  const { playing, setPlaying } = useContext(AudioContext);
  const { setCurrentSong, setCounter } = useContext(AudioContext);
  const [active, setActive] = useState<boolean>(false);

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
    // eslint-disable-next-line
  }, [audioFiles]);

  useEffect(() => {
    if (audioFiles !== props.src) {
      setActive(false);
    } else {
      setActive(true);
    }
    if (playing === false) {
      setActive(false);
    }
    // eslint-disable-next-line
  }, [audioFiles, playing]);

  return (
    <>
      {active ? (
        <button
          onClick={changes}
          className={`circle_button circle_button_${props.type} circle_button_hover`}
        ></button>
      ) : (
        <button
          onClick={changes}
          className={`circle_button circle_button_${props.type}`}
        >
          <svg
            className={`svg_stop svg_stop_${props.classType}`}
            viewBox="0 0 12 12"
          >
            <path d="M2.5.5v11l9-5.5z"></path>
          </svg>
        </button>
      )}
    </>
  );
};
