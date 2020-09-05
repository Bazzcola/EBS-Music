import React, { useState, useEffect, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { AudioContext } from 'ui/context/audioContext';
import './RepeatButton.scss';
export type ButtonProps = {
  svg: string;
};
export const RepeatButton = (props: ButtonProps) => {
  const [active, setActive] = useState<number>(0);
  const { repeatOne, repeatAll, setRepeatAll, setRepeatOne } = useContext(
    AudioContext
  );
  const changes = () => {
    setActive((active) => active + 1);
    if (active === 1) {
      setRepeatAll(true);
      setRepeatOne(false);
    } else {
      setRepeatAll(false);
    }
    if (active === 2) {
      setRepeatOne(true);
      setRepeatAll(false);
    } else {
      setRepeatOne(false);
    }
  };

  useEffect(() => {
    if (active > 2) {
      setActive(0);
      setRepeatOne(false);
    }
    if (active === 1) {
      setRepeatAll(true);
      console.log('повторять весь лист');
    }
    if (active === 2) {
      setRepeatOne(true);
      console.log('повторять песню');
    }
    // eslint-disable-next-line
  }, [active, repeatAll, repeatOne]);

  const tooltipText = () => {
    if (active > 0) {
      if (active === 1) {
        return 'Repeat the current track';
      }
      if (active === 2) {
        return 'Turn off repeat';
      }
    }
    return 'Repeat all track in list';
  };

  return (
    <>
      <button
        data-tip=""
        data-for="repeat"
        onClick={changes}
        className="repeat_button"
      >
        <svg
          className={`'svg_repeat' ${
            active > 0 ? 'svg_repeat_active' : 'svg_repeat'
          }`}
          viewBox="0 0 12 12"
        >
          <path
            d={
              active === 2
                ? 'M9.573 6.64c-1.34 0-2.427-1.15-2.427-2.57S8.233 1.5 9.573 1.5 12 2.65 12 4.07s-1.087 2.57-2.427 2.57zm.672-4.14h-.598c-.077.173-.324.562-.892.738v.628c.443-.12.672-.33.76-.4V5.3h.73V2.5zM3 4.072c-.995 0-1.8.863-1.8 1.929 0 1.064.805 1.928 1.8 1.928h.3c.165 0 .3.143.3.321v.643c0 .177-.135.321-.3.321H3c-1.657 0-3-1.439-3-3.213 0-1.776 1.343-3.214 3-3.214h.6V1.5L6 3.43v.321c0 .177-.135.321-.3.321H3zM7.5 7.93c.252 0 .75-.061 1.003-.162.02-.007.052-.023.052-.023h1.684c-.544.933-1.43 1.47-2.439 1.47h-.6V10.5L4.8 8.572V8.25c0-.178.134-.321.3-.321h2.4z'
                : props.svg
            }
          ></path>
        </svg>
      </button>
      <ReactTooltip
        id="repeat"
        className="switch_text"
        overridePosition={() => ({ left: 574, top: 0 })}
      >
        <span className="repeat_tooltip">{tooltipText()}</span>
      </ReactTooltip>
    </>
  );
};
