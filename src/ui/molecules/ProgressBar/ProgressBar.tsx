import React from 'react';
import 'ui/molecules/ProgressBar/ProgressBar.scss';

export const ProgressBar = () => {
  return (
    <div className="progress_bar">
      <div className="song_text">
        <span className="song_group">ALABAMA</span>•
        <span className="song_name">Kyok</span>
      </div>
      <div className="bar_wrapper">
        <span className="current_Time">0:00</span>
        <input
          className="slider_track_input"
          type="range"
          step="0.1"
          min="0"
          max="30"
        />
        <span className="total_Time">3:00</span>
      </div>
    </div>
  );
};
