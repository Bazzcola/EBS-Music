import React, { useState, ReactNode} from 'react';

export interface Props {
  playing: boolean;
  volume:number;
  currentTimeSecond: number;
  durationTime: number;
  clickedTime: number;
  currentVolume:number;
  setCurrentTimeSecond: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
  setPlaying:React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setCurrentVolume:React.Dispatch<React.SetStateAction<number>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const Tracks = [
  {id:1, title:'Track1', name:'Music1', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', duration:'6:20'},
  {id:2, title:'Track2', name:'Music2', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', duration:'5:30'},
  {id:3, title:'Track3', name:'Music3', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', duration:'4:10'},
  {id:4, title:'Track4', name:'Music4', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', duration:'6:15'}
]
const defaultValue = {
  playing:false,
  currentTimeSecond: 0,
  durationTime: 0,
  clickedTime: 0,
  volume:0.5,
  currentVolume:0,
  setCurrentTimeSecond: () => {},
  setDurationTime: () => {},
  setClickedTime: () => {},
  setPlaying:() => {},
  setVolume:() => {},
  setCurrentVolume:() => {}
};
export const AudioContext = React.createContext<Props>(defaultValue);

export const ProviderAudioContext = (props: ProviderProps) => {
  const children = props.children;
  const [volume, setVolume] = useState<number>(0.5);
  const [currentTimeSecond, setCurrentTimeSecond] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentVolume, setCurrentVolume] = useState<number>(0);

  return (
    <AudioContext.Provider
      value={{
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
        setDurationTime
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
