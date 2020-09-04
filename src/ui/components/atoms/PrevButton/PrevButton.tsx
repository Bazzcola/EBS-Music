import React, { useState, useContext, useEffect } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import { Tracks } from 'ui/context/audioContext';
import './PrevButton.scss';

export const PrevButton = () => {
  const [files, setFiles] = useState<string[]>(['']);
  const { counter, setCounter, setPlaying, setAudioFiles } = useContext(
    AudioContext
  );

  useEffect(() => {
    setFiles(Tracks.map((item: any) => item.src));
  }, []);

  let keys: any = Object.keys(files);

  const prevSong = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (counter === 0) {
      setCounter(files.length - 1);
      setAudioFiles(files[keys[files.length - 1]]);
    } else {
      setCounter((count: number) => count - 1);
      setAudioFiles(files[keys[counter - 1]]);
      setPlaying(true);
    }
  };
  return (
    <button onClick={prevSong} className="prev_button">
      <svg className="svg_prevbtn" viewBox="0 0 12 12">
        <path d="M2 5.397V.5a.5.5 0 1 0-1 0v11a.5.5 0 1 0 1 0V6.597L11 12V0L2 5.397z"></path>
      </svg>
    </button>
  );
};
