import React,{useState, useContext} from 'react';
import ReactTooltip from 'react-tooltip';
import { VolumeBar } from 'ui/atoms/VolumeBar/VolumeBar';
import { AudioContext } from 'ui/context/audioContext';
import 'ui/atoms/VolumeButton/VolumeButton.scss';

export const VolumeButton = () => {
    const [active, setActive] = useState<boolean>(false);
    const {volume, setVolume} = useContext(AudioContext);
    const {currentVolume, setCurrentVolume} = useContext(AudioContext);
    const changes = () => {
      setActive(!active);
      if(!active) {
        setCurrentVolume(volume);
        setVolume(0.0)
      } else {
        setVolume(currentVolume)
      }
    };
    return (
      <>
        <button
            data-tip=''
            data-for='volume'
            onClick={changes}
            className="volume_button"
        >
        <svg className="svg_volume" viewBox="0 0 12 12">
          <path d="M3 4.5H.5v3H3l2.5 2v-7z"></path>
          <path d={`${active ? "M10.5 4.5l-3 3m0-3l3 3" : "M9 2.5c2 1.933 2 5.067 0 7m-1.5-5c.976.829.976 2.171 0 3"}`}></path>
        </svg>
    </button>
    <ReactTooltip id='volume' overridePosition={()=>({left:617,top:2})} backgroundColor={'white'} className="volume_tooltip" clickable={true} scrollHide={false}><VolumeBar active={active} /></ReactTooltip>
    </>
    )
}