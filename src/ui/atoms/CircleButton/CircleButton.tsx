import React, { useState } from 'react';
import './CircleButton.scss';

export type ButtonProps = {
  onClick?: () => void;
};

export const CircleButton: React.FC<ButtonProps> = () => {
  const [active, setActive] = useState<boolean>(false);
  const type = 'black';
  const changes = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <button onClick={changes} className={`circle_button circle_button_${type}`}>
      {active ? (
        <svg className="svg_play">
          <path d="M2.5.5v11l9-5.5z"></path>
        </svg>
      ) : (
        <svg className="svg_stop">
          <path d="M2.495 0h2.01C4.778 0 5 .224 5 .5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 2 11.5V.5a.5.5 0 0 1 .495-.5zM7 .5a.5.5 0 0 1 .495-.5h2.01c.273 0 .495.224.495.5v11a.5.5 0 0 1-.495.5h-2.01A.498.498 0 0 1 7 11.5V.5z"></path>
        </svg>
      )}
    </button>
  );
};
