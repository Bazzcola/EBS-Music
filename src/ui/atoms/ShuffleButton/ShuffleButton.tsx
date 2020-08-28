import React,{useState} from 'react';
import 'ui/atoms/ShuffleButton/ShuffleButton.scss';
export type ButtonProps = {
    svg:string;
  };
export const ShuffleButton = (props:ButtonProps) => {
    const [active, setActive] = useState<boolean>(false);
    const changes = () => {
    setActive(!active);
  };
    return (
        <button
            onClick={changes}
            className="shuffle_button"
        >
        <svg className={`${active ? 'svg_shuffle_active' : 'svg_shuffle'}`} viewBox="0 0 12 12">
          <path d={props.svg}></path>
        </svg>
    </button>
    )
}