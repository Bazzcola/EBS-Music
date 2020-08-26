import React, { useState, useEffect, ReactNode } from 'react';

export interface Props {
  current: number;
  durationTime: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
}
export interface Audio {
  duration: number;
  currentTime: number;
}
interface ProviderProps {
  children: ReactNode;
}

const defaultValue = {
  current: 0,
  durationTime: 0,
  setCurrent: () => {},
  setDurationTime: () => {}
};
export const AudioContext = React.createContext<Props>(defaultValue);

export const ProviderAudioContext = (props: ProviderProps) => {
  const children = props.children;
  const [current, setCurrent] = useState<number>(0);
  const [durationTime, setDurationTime] = useState<number>(0);

  useEffect(() => {
    // setDurationTime(audio.duration);
    // setCurrentTime(audio.currentTime);
  }, []);

  return (
    <AudioContext.Provider
      value={{
        current,
        setCurrent,
        durationTime,
        setDurationTime
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
