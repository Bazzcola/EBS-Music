import React, { useState } from 'react';
import 'ui/atoms/NextButton/NextButton.scss';

export const NextButton = () => {
  const [active, setActive] = useState<boolean>(false);
  const changes = () => {
    setActive(!active);
  };
  return (
    <button onClick={changes} className="next_button">
      <svg className="svg_nextbtn" viewBox="0 0 12 12">
        <path d="M11 .5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5V7.08L1.562 11.95A.375.375 0 0 1 1 11.624V.376c0-.29.312-.47.562-.325L10 4.919V.5c0-.276.232-.5.5-.5.276 0 .5.229.5.5z"></path>
      </svg>
    </button>
  );
};
