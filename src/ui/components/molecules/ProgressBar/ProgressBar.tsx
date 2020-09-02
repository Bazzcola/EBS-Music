import React, { useRef, useContext, useEffect, useState } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import ReactTooltip from 'react-tooltip';
import 'ui/components/molecules/ProgressBar/ProgressBar.scss';
import { Tracks } from 'ui/context/audioContext';

export const ProgressBar = () => {
  const { currentTimeSecond, setCurrentTimeSecond } = useContext(AudioContext);
  const { durationTime, setDurationTime } = useContext(AudioContext);
  const { clickedTime, setClickedTime } = useContext(AudioContext);
  const { playing } = useContext(AudioContext);
  const { volume } = useContext(AudioContext);
  const [barTooltip, setBarTooltip] = useState<number>(0);
  const { audioFiles, setAudioFiles } = useContext(AudioContext);
  const [audioList, setAudioList] = useState<string>('');
  const { counter, setCounter } = useContext(AudioContext);
  const audio = useRef(null);
  const cur: any = audio.current;

  // const files = [
  //   {
  //     id: 1,
  //     track: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  //     playing: false
  //   },
  //   {
  //     id: 2,
  //     track: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  //     playing: false
  //   },
  //   {
  //     id: 3,
  //     track: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  //     playing: false
  //   },
  //   {
  //     id: 4,
  //     track: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  //     playing: false
  //   }
  // ];

  // setAudioList(files[keys[0]]);

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

    cur.volume = volume;
    playing ? cur.play() : cur.pause();
    if (barTooltip < 0) {
      setBarTooltip(0);
    }
    if (clickedTime && clickedTime !== currentTimeSecond) {
      cur.currentTime = clickedTime;
      setClickedTime(0);
    }
    // eslint-disable-next-line
  }, [currentTimeSecond, clickedTime, playing, barTooltip, volume]);

  // useEffect(() => {
  //   if (currentTimeSecond > 10 && currentTimeSecond === durationTime) {
  //     console.log('закончилась песня');
  //     let count = 0;
  //     count++;
  //     console.log(files[keys[count]]);
  //     if (files[keys[count]] === files[keys[count]]) {
  //       setAudioFiles(files[keys[count + 1]]);
  //     }
  //     setAudioFiles(files[keys[count]]);
  //   }
  // }, [currentTimeSecond]);

  const files = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  ];

  let keys: any = Object.keys(files);

  const test = () => {
    if (currentTimeSecond > 10 && currentTimeSecond === durationTime) {
      console.log('закончилась песня');
      if (counter === files.length - 1) {
        setCounter(0);
        setAudioFiles(files[keys[0]]);
      } else {
        setCounter((count) => count + 1);
        setAudioFiles(files[keys[counter + 1]]);
      }
    }
  };

  const calcClickedTime = (e: { pageX: number }) => {
    const clickPositionInPage = e.pageX;
    const bar: any = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = durationTime / barWidth;
    const result = timePerPixel * clickPositionInBar;
    return result.toFixed();
  };

  const onTimeUpdate = (time: any) => setClickedTime(time);

  const handleTimeDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    onTimeUpdate(calcClickedTime(e));
    const onMove = (eMove: { pageX: number }) =>
      onTimeUpdate(calcClickedTime(eMove));

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMove);
    });
  };

  const barTooltipLine = (time: any) => setBarTooltip(time);

  const getTooltipTime = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    const onMoveTooltip = (eMove: { pageX: number }) =>
      barTooltipLine(calcClickedTime(eMove));

    document.addEventListener('mousemove', onMoveTooltip);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMoveTooltip);
    });
  };

  const formatTooltiptime = (secs: number) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = 0 + min;
    }
    if (sec < 10) {
      sec = 0 + sec;
    }
    // eslint-disable-next-line
    return min < 10 && sec < 10 ? min + ':' + '0' + sec : min + ':' + sec;
  };
  const formatSecondsAsTime = (secs: number) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    // eslint-disable-next-line
    return min < 10 && sec < 10 ? min + ':' + '0' + sec : min + ':' + sec;
  };
  const formatSecondsAllTime = (secs: number) => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);
    // eslint-disable-next-line
    return min < 10 && sec < 10 ? min + ':' + '0' + sec : min + ':' + sec;
  };

  const curPercentage = (currentTimeSecond / durationTime) * 100;

  return (
    <div className="progress_bar">
      <audio
        controls
        preload="metadata"
        autoPlay
        id="audio"
        ref={audio}
        className="audio_source"
        src={audioFiles}
        onEnded={test}
      ></audio>
      <div className="song_text">
        <span className="song_group">ALABAMA</span>•
        <span className="song_name">Kyok</span>
      </div>
      <div className="bar">
        <span className="bar__time">
          {formatSecondsAsTime(currentTimeSecond)}
        </span>
        <div
          data-tip=""
          data-for="bar_time"
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, #6fd44a ${curPercentage}%, grey 0)`
          }}
          onMouseDown={(e) => handleTimeDrag(e)}
          onMouseMove={(e) => getTooltipTime(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage - 2}%` }}
          />
          <ReactTooltip id="bar_time">
            {formatTooltiptime(barTooltip)}
          </ReactTooltip>
        </div>

        <span className="bar__time">{formatSecondsAllTime(durationTime)}</span>
      </div>
    </div>
  );
};
