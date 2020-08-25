import React from 'react';
import { PrevButton } from 'ui/atoms/PrevButton/PrevButton';
import { NextButton } from 'ui/atoms/NextButton/NextButton';
import { PlayButton } from 'ui/atoms/PlayButton/PlayButton';
import 'ui/molecules/PlayerButtons/PlayerButtons.scss';

export const PlayerButtons = () => {
  return (
    <div className="btn_box">
      <div className="btn_box__item">
        <PrevButton />
      </div>
      <div className="btn_box__item">
        <PlayButton />
      </div>
      <div className="btn_box__item">
        <NextButton />
      </div>
    </div>
  );
};
