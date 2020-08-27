import React, { useState, ReactNode } from 'react';

export interface Props {
  currentTimeSecond: number;
  durationTime: number;
  clickedTime: number;
  setCurrentTimeSecond: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
}
export interface Audio {
  duration: number;
  currentTime: number;
}
interface ProviderProps {
  children: ReactNode;
}

const defaultValue = {
  currentTimeSecond: 0,
  durationTime: 0,
  clickedTime: 0,
  setCurrentTimeSecond: () => {},
  setDurationTime: () => {},
  setClickedTime: () => {}
};
export const AudioContext = React.createContext<Props>(defaultValue);

export const ProviderAudioContext = (props: ProviderProps) => {
  const children = props.children;
  const [currentTimeSecond, setCurrentTimeSecond] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number>(0);

  return (
    <AudioContext.Provider
      value={{
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
