import React from 'react';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { Button } from 'ui/atoms/Button/Button';
import './TrackList.scss';

export const TrackList = () => {
  const item = [
    {
      name: 'Alabama',
      time: '3:20'
    },
    {
      name: 'Alabama',
      time: '3:20'
    },
    {
      name: 'Alabama',
      time: '3:20'
    },
    {
      name: 'Alabama',
      time: '3:20'
    }
  ];

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
        {item ? (
          item.map((item: { name: string; time: string }) => (
            <div className="track_item" key={Math.random()}>
              <CircleButton classType={classType} type={typeCircleButton} />
              <div className="date_item">
                <p>{item.name}</p>
                <p>{item.time}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="track_item">
            <p>Name</p>
            <p>Time</p>
          </div>
        )}
      </div>
    </div>
  );
};
