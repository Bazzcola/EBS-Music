import React, { useContext, useRef, useCallback } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import 'ui/components/atoms/VolumeBar/VolumeBar.scss';

type active = {
  active?: boolean;
};
export const VolumeBar = (props: active) => {
  const { setVolume } = useContext(AudioContext);

  const getValue = useCallback(() => {
    const getInput: any = inputValue.current;
    const getClear = getInput.value;
    const getClear2 = Math.floor(getClear);
    setVolume(getClear2 / 10);
  }, [setVolume]);
  const inputValue = useRef(null);
  return (
    <div className="input_check">
      <input
        type="range"
        step="1"
        min="0"
        max="10"
        ref={inputValue}
        onChange={getValue}
        defaultValue={5}
      ></input>
    </div>
  );
};
