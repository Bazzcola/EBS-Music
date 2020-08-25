import React, { useState } from 'react';
import './Button.scss';

export type ButtonProps = {
  typeButton?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const changes = () => {
    setActive(!active);
  };
  return (
    <button
      onClick={changes}
      className={`big_button big_button_${props.typeButton}`}
    >
      {active ? (
        <svg className="play_svg">
          <path d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm0 1A6 6 0 1 1 6 0a6 6 0 0 1 0 12zM4.937 4.017a.125.125 0 0 0-.187.108v3.75c0 .096.104.156.187.108l3.25-1.875a.125.125 0 0 0 0-.216l-3.25-1.875z"></path>
        </svg>
      ) : (
        <svg className="stop_svg">
          <path d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm0-1A5 5 0 1 0 6 1a5 5 0 0 0 0 10zM4.665 4h.67c.091 0 .165.075.165.167v3.666A.167.167 0 0 1 5.335 8h-.67a.166.166 0 0 1-.165-.167V4.167c0-.092.075-.167.165-.167zm1.835.167c0-.092.075-.167.165-.167h.67c.091 0 .165.075.165.167v3.666A.167.167 0 0 1 7.335 8h-.67a.166.166 0 0 1-.165-.167V4.167z"></path>
        </svg>
      )}
      {active ? 'Resume' : 'Play'}
    </button>
  );
};
