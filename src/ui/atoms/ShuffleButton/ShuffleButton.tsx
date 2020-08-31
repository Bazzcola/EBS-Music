import React,{useState} from 'react';
import ReactTooltip from 'react-tooltip';
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
      <>
        <button
            data-tip=''
            data-for='shuffle'
            onClick={changes}
            className="shuffle_button"
        >
        <svg className={`${active ? 'svg_shuffle_active' : 'svg_shuffle'}`} viewBox="0 0 12 12">
          <path d={props.svg}></path>
        </svg>
    </button>
    <ReactTooltip id='shuffle' overridePosition={()=>({left:634,top:0})}><span className="shuffle_tooltip">Turn on Shuffle</span></ReactTooltip>
    </>
    )
}