import React,{useState} from 'react';
import 'ui/atoms/RepeatButton/RepeatButton.scss';
export type ButtonProps = {
    svg:string;
  };
export const RepeatButton = (props:ButtonProps) => {
    const [active, setActive] = useState<boolean>(false);
    const changes = () => {
    setActive(!active);
  };
    return (
        <button
            onClick={changes}
            className="repeat_button"
        >
        <svg className={`${active ? 'svg_repeat_active' : 'svg_repeat'}`} viewBox="0 0 12 12">
          <path d={props.svg}></path>
        </svg>
    </button>
    )
}