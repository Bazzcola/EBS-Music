import React, { useState, useEffect, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { AudioContext } from 'ui/context/audioContext';
import './ShuffleButton.scss';
export type ButtonProps = {
  svg: string;
};
export const ShuffleButton = (props: ButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { setShuffle, currentTimeSecond } = useContext(AudioContext);
  const changes = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (active) {
      setShuffle(true);
    } else {
      setShuffle(false);
    }
    // eslint-disable-next-line
  }, [active, currentTimeSecond]);
  return (
    <>
      <button
        data-tip=""
        data-for="shuffle"
        onClick={changes}
        className="shuffle_button"
      >
        <svg
          className={`${active ? 'svg_shuffle_active' : 'svg_shuffle'}`}
          viewBox="0 0 12 12"
        >
          <path d={props.svg}></path>
        </svg>
      </button>
      <ReactTooltip
        id="shuffle"
        overridePosition={() => ({ left: 640, top: 0 })}
      >
        <span className="shuffle_tooltip">
          {!active ? 'Turn on Shuffle' : 'Turn off Shuffle'}
        </span>
      </ReactTooltip>
    </>
  );
};
