import React, { useRef, useContext, useEffect, useState } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import 'ui/molecules/ProgressBar/ProgressBar.scss';

export const ProgressBar = () => {
  const { currentTimeSecond, setCurrentTimeSecond } = useContext(AudioContext);
  const { durationTime, setDurationTime } = useContext(AudioContext);
  const { clickedTime, setClickedTime } = useContext(AudioContext);
  const [playing, setPlaying] = useState(false);
  const audio = useRef(null);

  useEffect(() => {
    const cur: any = audio.current;
    cur.ontimeupdate = () => {
      let seconds = cur.currentTime;
      setCurrentTimeSecond(seconds.toFixed());
    };
    cur.onloadedmetadata = () => {
      let allSeconds = cur.duration;
      setDurationTime(allSeconds.toFixed());
    };
    if (clickedTime && clickedTime !== currentTimeSecond) {
      cur.currentTime = clickedTime;
      setClickedTime(0);
    }
  }, [currentTimeSecond, clickedTime]);

  // console.log(durationTime);
  // console.log(currentTimeSecond);
  // console.log(clickedTime);

  // useEffect(() => {
  //   const cur: any = audio.current;

  //   const setAudioData = () => {
  //     setDurationTime(cur.duration);
  //     setCurrentTimeSecond(cur.currentTime);
  //   }

  //   const setAudioTime = () => setCurrentTimeSecond(cur.currentTime);

  //   cur.addEventListener("loadeddata", setAudioData);

  //   cur.addEventListener("timeupdate", setAudioTime);

  //   playing ? cur.play() : cur.pause();

  //   if (clickedTime && clickedTime !== currentTimeSecond) {
  //     cur.currentTime = clickedTime;
  //     setClickedTime(0);
  //   } 

  //   return () => {
  //     cur.removeEventListener("loadeddata", setAudioData);
  //     cur.removeEventListener("timeupdate", setAudioTime);
  //   }
  // },[]);
 
  const calcClickedTime = (e: { pageX: number }) => {
    const clickPositionInPage = e.pageX;
    const bar: any = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = durationTime / barWidth;
    const result = timePerPixel * clickPositionInBar;
    console.log(result.toFixed())
    setClickedTime(result);
    // return result.toFixed();
  };
 
  // const handleTimeDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.persist();
  //   const onTimeUpdate = (eMove: string) => calcClickedTime(e);

  //   const updateTimeOnMove = (eMove: { pageX: number; }) => {
  //     onTimeUpdate(calcClickedTime(eMove));
  //   };

  //   document.addEventListener('mousemove', updateTimeOnMove);

  //   document.addEventListener('mouseup', () => {
  //     document.removeEventListener('mousemove', updateTimeOnMove);
  //   });
  // };

  const Play = () => {
    const audioPlay: any = audio.current;
    audioPlay.play();
  };
  const Stop = () => {
    const audioPlay: any = audio.current;
    audioPlay.pause();
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

    return min < 10 && sec < 10 ? min + ':' + '0' + sec : min + ':' + sec;
  };
  const formatSecondsAllTime = (secs: number) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = 0 + min;
    }
    if (sec < 10) {
      sec = 0 + sec;
    }

    return min + ':' + sec;
  };

  const curPercentage = (currentTimeSecond / durationTime) * 100;

  return (
    <div className="progress_bar">
      <audio controls preload="metadata" id="audio" ref={audio}>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="song_text">
        <span className="song_group">ALABAMA</span>•
        <span className="song_name">Kyok</span>
      </div>
      <div className="bar">
        <span className="bar__time">
          {formatSecondsAsTime(currentTimeSecond)}
        </span>
        <div
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, #6fd44a ${curPercentage}%, grey 0)`
          }}
          onMouseDown={(e) => calcClickedTime(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage - 2}%` }}
          />
        </div>

        <span className="bar__time">{formatSecondsAllTime(durationTime)}</span>
      </div>
      <button onClick={Play}>PLay</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
};
