import React from 'react';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { Button } from 'ui/atoms/Button/Button';
import { Tracks } from 'ui/context/audioContext';
import './TrackList.scss';


export const TrackList = () => {
  const typeButton = 'pink';
  const typeCircleButton = 'black';
  const classType = 'circle_button';
 
  return (
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
        {
          Tracks.map((item: {id:number; title:string; duration:string}) => (
            <div className="track_item" key={item.id}>
              <CircleButton classType={classType} type={typeCircleButton} />
              <div className="date_item">
                <p>{item.title}</p>
                <p>{item.duration}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
