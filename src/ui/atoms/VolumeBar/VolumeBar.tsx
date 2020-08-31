import React, { useContext, useRef, useEffect, useState } from 'react';
import { AudioContext } from 'ui/context/audioContext';
import 'ui/atoms/VolumeBar/VolumeBar.scss';

type active = {
    active:boolean;
}
export const VolumeBar = (props:active) => {
    const { volume, setVolume } = useContext(AudioContext);
    // const { currentVolume } = useContext(AudioContext);
    const [saveVolume, setSaveVolume] = useState<number>(0);
    useEffect(() => {
        if(volume === 0.0) {
            setSaveVolume(0)
        }
    },[volume])
    const getValue = () => {
        const getInput:any = inputValue.current
        const getClear = getInput.value;
        const getClear2 = Math.floor(getClear);
        setVolume(getClear2 / 10);
    }
    const inputValue = useRef(null);
    console.log(saveVolume)
    return (
        <input type="range" step="1" min="0" max="10" ref={inputValue} onChange={getValue} defaultValue={5}></input>
    )
}