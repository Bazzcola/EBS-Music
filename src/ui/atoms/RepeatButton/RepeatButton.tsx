import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';
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
      <>
        <button
            data-tip=''
            data-for='repeat'
            onClick={changes}
            className="repeat_button"
        >
        <svg className={`${active ? 'svg_repeat_active' : 'svg_repeat'}`} viewBox="0 0 12 12">
          <path d={props.svg}></path>
        </svg>
    </button>
    <ReactTooltip id='repeat' overridePosition={()=>({left:574,top:0})}><span className="repeat_tooltip">Repeat all tracks in list</span></ReactTooltip>
    </>
    )
}