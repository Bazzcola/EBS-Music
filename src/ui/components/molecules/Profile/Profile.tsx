import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AudioContext, tracks } from 'ui/context/audioContext';
import 'ui/components/molecules/Profile/Profile.scss';

type song = {
  id: number;
  title: string;
  name: string;
  src: string;
  duration: string;
  img: string;
};

export const Profile = () => {
  const match = useParams<{ name: string }>();
  const [track, setTrack] = useState<song>();
  const [active, setActive] = useState<boolean>(false);
  const {
    playing,
    setPlaying,
    setAudioFiles,
    setProfile,
    profile,
    audioFiles
  } = useContext(AudioContext);

  useEffect(() => {
    if (playing) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [playing, match]);

  const changes = useCallback(() => {
    setActive(!active);
    if (!active) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }, [active, setPlaying]);

  useEffect(() => {
    if (match) {
      setProfile(true);
      setPlaying(false);
    } else {
      setProfile(false);
    }
    // eslint-disable-next-line
  }, [match]);
  useEffect(() => {
    tracks.filter((item: song) =>
      item.title === match.name ? setTrack(item) : false
    );
    tracks.filter((item: song) =>
      item.title === match.name ? setAudioFiles(item.src) : false
    );
    // eslint-disable-next-line
  }, [match, audioFiles]);

  return (
    <div className="profile">
      <div className="profile_img">
        <img
          src={
            profile
              ? track?.img
              : 'https://i.pinimg.com/564x/2e/9a/d8/2e9ad8621e03cd81e2d81fcdbe327ba6.jpg'
          }
          alt=""
        />
        {active ? (
          <button
            onClick={changes}
            className={`profile_circle_button profile_circle_button_white profile_circle_button_hover`}
          ></button>
        ) : (
          <button
            onClick={changes}
            className={`profile_circle_button profile_circle_button_white`}
          >
            <svg
              className={`profile_svg_stop profile_svg_stop_black`}
              viewBox="0 0 12 12"
            >
              <path d="M2.5.5v11l9-5.5z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="profile_text">
        <span>EXPLICIT</span>
        <h2>{profile ? track?.title : 'Storybook'}</h2>
        <p>{profile ? track?.name : 'Storybook'}</p>
      </div>
    </div>
  );
};
