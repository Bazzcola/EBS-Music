import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AudioContext, Tracks } from 'ui/context/audioContext';
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
  const black = 'black';
  const white = 'white';
  const match = useParams<{ name: string }>();
  const [track, setTrack] = useState<song>();
  const [active, setActive] = useState<boolean>(false);
  const { playing, setPlaying, setAudioFiles } = useContext(AudioContext);

  const changes = () => {
    setActive(!active);
    if (!active) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (playing) {
      setActive(true);
    }
    if (playing === false) {
      setActive(false);
    }
  }, [playing]);

  useEffect(() => {
    Tracks.filter((item: song) =>
      item.title === match.name ? setTrack(item) : false
    );
    Tracks.filter((item: song) =>
      item.title === match.name ? setAudioFiles(item.src) : false
    );
    // Tracks.filter((item: song) => (item.src ? setAudioFiles(item.src) : false));
    // eslint-disable-next-line
  }, [match]);

  return (
    <div className="profile">
      <div className="profile_img">
        <img src={track?.img} alt="" />
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
        <h2>{track?.title}</h2>
        <p>{track?.name}</p>
      </div>
    </div>
  );
};
