import React from 'react';
import { PrevButton } from 'ui/components/atoms/PrevButton/PrevButton';
import { NextButton } from 'ui/components/atoms/NextButton/NextButton';
import { PlayButton } from 'ui/components/atoms/PlayButton/PlayButton';
import 'ui/components/molecules/PlayerButtons/PlayerButtons.scss';

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
