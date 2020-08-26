import React, { useState, useRef, useContext, useEffect } from 'react';
import { AudioContext, Audio } from 'ui/context/audioContext';
import 'ui/molecules/ProgressBar/ProgressBar.scss';

export const ProgressBar = () => {
  const { current, setCurrent } = useContext(AudioContext);
  const { durationTime, setDurationTime } = useContext(AudioContext);
  const [spanCurrent, setSpanCurrent] = useState<number>(0);
  const audio = useRef(null);

  useEffect(() => {
    const cur: any = audio.current;
    setCurrent(cur.currentTime);
    cur.ontimeupdate = (event: any) => {
      let x = cur.currentTime;
      setSpanCurrent(x.toFixed());
    };
  }, [spanCurrent]);

  console.log(spanCurrent);

  const Play = () => {
    const audioPlay: any = audio.current;
    const x = audioPlay.play();
  };
  const Stop = () => {
    const audioPlay: any = audio.current;
    const x = audioPlay.pause();
  };
  const formatSecondsAsTime = (secs: number) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = 0 + min;
    }
    if (sec < 10) {
      sec = 0 + sec;
    }

    return min < 10 && sec < 10 ? '0' + min + ':' + '0' + sec : min + ':' + sec;
  };
  return (
    <div className="progress_bar">
      <audio controls id="audio" ref={audio}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="song_text">
        <span className="song_group">ALABAMA</span>•
        <span className="song_name">Kyok</span>
      </div>
      <div className="bar_wrapper">
        <span className="current_Time">{formatSecondsAsTime(spanCurrent)}</span>
        <div className="progress_line"></div>
        <input
          className="slider_track_input"
          type="range"
          step="0.1"
          min="0"
          max="30"
        />
        <span className="total_Time"></span>
      </div>
      <button onClick={Play}>PLay</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
};
