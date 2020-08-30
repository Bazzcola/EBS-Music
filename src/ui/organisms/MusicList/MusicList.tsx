import React from 'react';
import {TrackList} from 'ui/molecules/TrackList/TrackList';
import 'ui/organisms/MusicList/MusicList.scss';

export const MusicList = () => {

    return(
        <div className="music_list_container">
            <TrackList />
        </div>
    )
}