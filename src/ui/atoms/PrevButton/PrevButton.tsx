import React, { useState } from 'react';
import 'ui/atoms/PrevButton/PrevButton.scss';

export const PrevButton = () => {
  const [active, setActive] = useState<boolean>(false);
  const changes = () => {
    setActive(!active);
  };
  return (
    <button onClick={changes} className="prev_button">
      <svg className="svg_prevbtn" viewBox="0 0 12 12">
        <path d="M2 5.397V.5a.5.5 0 1 0-1 0v11a.5.5 0 1 0 1 0V6.597L11 12V0L2 5.397z"></path>
      </svg>
    </button>
  );
};
