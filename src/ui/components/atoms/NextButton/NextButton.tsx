import React, { useState, useContext, useEffect } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import { Tracks } from 'ui/context/audioContext';
import './NextButton.scss';

export const NextButton = () => {
  const [files, setFiles] = useState<string[]>(['']);
  const { counter, setCounter, setPlaying, setAudioFiles } = useContext(
    AudioContext
  );

  useEffect(() => {
    setFiles(Tracks.map((item: any) => item.src));
  }, []);

  let keys: any = Object.keys(files);

  const nextSong = (e: any) => {
    e.preventDefault();
    if (counter === files.length - 1) {
      setCounter(0);
      setAudioFiles(files[keys[0]]);
    } else {
      setCounter((count: number) => count + 1);
      setAudioFiles(files[keys[counter + 1]]);
      setPlaying(true);
    }
  };
  return (
    <button onClick={nextSong} className="next_button">
      <svg className="svg_nextbtn" viewBox="0 0 12 12">
        <path d="M11 .5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5V7.08L1.562 11.95A.375.375 0 0 1 1 11.624V.376c0-.29.312-.47.562-.325L10 4.919V.5c0-.276.232-.5.5-.5.276 0 .5.229.5.5z"></path>
      </svg>
    </button>
  );
};
