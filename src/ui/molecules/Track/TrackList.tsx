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
  return (
    <div className="container">
      <Button />
      <div className="track_list">
        <div className="track_list__title">
          <h3>#</h3>
          <p className="track_text">TRACK</p>
          <p>L.</p>
        </div>
        {item ? (
          item.map((item: { name: string; time: string }) => (
            <div className="track_item" key={Math.random()}>
              <CircleButton />
              <p>{item.name}</p>
              <p>{item.time}</p>
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
