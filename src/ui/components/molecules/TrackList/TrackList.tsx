import React, { useContext } from 'react';
import { CircleButton } from 'ui/components/atoms/CircleButton/CircleButton';
import { Button } from 'ui/components/atoms/Button/Button';
import { Tracks } from 'ui/context/audioContext';
import { Link } from 'react-router-dom';
import { AudioContext } from 'ui/context/audioContext';
import './TrackList.scss';

export const TrackList = () => {
  const typeButton = 'pink';
  const typeCircleButton = 'black';
  const classType = 'circle_button';
  const { currentSong } = useContext(AudioContext);
  const { audioFiles } = useContext(AudioContext);

  return (
    <div className="music_list_container">
      <div className="container">
        <div className="track_list">
          <Button typeButton={typeButton} />
          <div className="track_list__title">
            <h3>#</h3>
            <div className="track_text__item">
              <p className="track_text">TRACK</p>
              <p>L.</p>
            </div>
          </div>
          {Tracks.map(
            (item: {
              id: number;
              title: string;
              duration: string;
              src: string;
            }) => (
              <div
                className={
                  currentSong && item.src === audioFiles
                    ? 'track_item_active'
                    : 'track_item'
                }
                key={item.src}
              >
                <CircleButton
                  classType={classType}
                  type={typeCircleButton}
                  src={item.src}
                  id={item.id}
                />
                <div className="date_item">
                  <Link to={`/${item.title}`}>
                    <p>{item.title}</p>
                  </Link>
                  <p>{item.duration}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
