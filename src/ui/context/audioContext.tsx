import React, { useState, ReactNode } from 'react';

export interface Props {
  playing: boolean;
  volume: number;
  currentTimeSecond: number;
  durationTime: number;
  clickedTime: number;
  currentVolume: number;
  audioFiles: string | undefined;
  currentSong: boolean;
  setCurrentSong: React.Dispatch<React.SetStateAction<boolean>>;
  setAudioFiles: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCurrentTimeSecond: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setCurrentVolume: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
export type song = {
  id: number;
  title: string;
  name: string;
  src: string;
  duration: string;
  img: string;
};
interface ProviderProps {
  children: ReactNode;
}

export const Tracks = [
  {
    id: 1,
    title: 'Track1',
    name: 'Music1',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: '6:20',
    img:
      'https://akket.com/wp-content/uploads/2019/11/World-of-Warcraft-Shadowlands-Blizzard.jpg'
  },
  {
    id: 2,
    title: 'Track2',
    name: 'Music2',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: '5:30',
    img:
      'https://vignette.wikia.nocookie.net/wowwiki/images/5/5c/Fanart-0827-large.jpg/revision/latest?cb=20140526223426'
  },
  {
    id: 3,
    title: 'Track3',
    name: 'Music3',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '4:10',
    img:
      'https://i.pinimg.com/736x/a4/55/84/a455849801351d1025c12fc8e894291a.jpg'
  },
  {
    id: 4,
    title: 'Track4',
    name: 'Music4',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: '6:15',
    img:
      'https://i.pinimg.com/originals/25/68/bb/2568bbbcece75bf9a94da355beb02306.jpg'
  }
];

const defaultValue = {
  playing: false,
  currentTimeSecond: 0,
  durationTime: 1,
  clickedTime: 0,
  volume: 0.5,
  currentVolume: 0,
  audioFiles: '',
  currentSong: false,
  setCurrentSong: () => {},
  setCurrentTimeSecond: () => {},
  setDurationTime: () => {},
  setClickedTime: () => {},
  setPlaying: () => {},
  setVolume: () => {},
  setCurrentVolume: () => {},
  setAudioFiles: () => {},
  counter: 0,
  setCounter: () => {}
};
export const AudioContext = React.createContext<Props>(defaultValue);

export const ProviderAudioContext = (props: ProviderProps) => {
  const children = props.children;
  const [currentSong, setCurrentSong] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [currentTimeSecond, setCurrentTimeSecond] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(1);
  const [clickedTime, setClickedTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentVolume, setCurrentVolume] = useState<number>(0);
  const [audioFiles, setAudioFiles] = useState<string | undefined>('');
  const [counter, setCounter] = useState<number>(0);

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        audioFiles,
        setAudioFiles,
        currentVolume,
        setCurrentVolume,
        volume,
        setVolume,
        playing,
        setPlaying,
        clickedTime,
        setClickedTime,
        currentTimeSecond,
        setCurrentTimeSecond,
        durationTime,
        setDurationTime,
        counter,
        setCounter
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
