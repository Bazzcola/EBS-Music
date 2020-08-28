import React from 'react';
import {PlayerButtons} from 'ui/molecules/PlayerButtons/PlayerButtons';
import {ProgressBar} from 'ui/molecules/ProgressBar/ProgressBar';
import {ControlButtons} from 'ui/molecules/ControlButtons/ControlButtons';
import 'ui/organisms/MusicBar/MusicBar.scss';

export const MusicBar = () => {

    return(
        <div className="music_container">
            <div className="player_buttons_box">
                <PlayerButtons />
            </div>
            <div className="progress_bar_box">
                <ProgressBar />
            </div>
            <div className="control_buttons_box">
                <ControlButtons />
            </div>
        </div>
    )
}