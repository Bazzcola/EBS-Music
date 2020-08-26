import React, { useState, useEffect, ReactNode } from 'react';

export interface Props {
  current: number | null;
  durationTime: number | null;
  setCurrent: React.Dispatch<React.SetStateAction<number | null>>;
  setDurationTime: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface Audio {
  duration: number | null;
  currentTime: number | null;
}
interface ProviderProps {
  children: ReactNode;
}

const defaultValue = {
  current: null,
  durationTime: null,
  setCurrent: () => {},
  setDurationTime: () => {}
};
export const AudioContext = React.createContext<Props>(defaultValue);

export const ProviderAudioContext = (props: ProviderProps) => {
  const children = props.children;
  const [current, setCurrent] = useState<number | null>(null);
  const [durationTime, setDurationTime] = useState<number | null>(null);

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
