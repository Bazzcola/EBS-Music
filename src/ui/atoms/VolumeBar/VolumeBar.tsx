import React, { useContext, useRef } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import 'ui/atoms/VolumeBar/VolumeBar.scss';

type active = {
    active:boolean;
}
export const VolumeBar = (props:active) => {
    const { setVolume } = useContext(AudioContext);
    
    const getValue = () => {
        const getInput:any = inputValue.current
        const getClear = getInput.value;
        const getClear2 = Math.floor(getClear);
        setVolume(getClear2 / 10);
    }
    const inputValue = useRef(null);
    console.log(props.active)
    return (
        <input type="range" step="1" min="0" max="10" ref={inputValue} onChange={getValue} defaultValue={5}></input>
   )
}