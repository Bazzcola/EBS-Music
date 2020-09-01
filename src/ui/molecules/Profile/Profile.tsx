import React, { useEffect, useState, useContext } from 'react';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import { useParams } from 'react-router-dom';
import { AudioContext, Tracks } from 'ui/context/audioContext';
import 'ui/molecules/Profile/Profile.scss';

type song = {
  id: number;
  title: string;
  name: string;
  src: string;
  duration: string;
  img:string;
}

export const Profile = () => {
  const black = 'black';
  const white = 'white';
  const { setList } = useContext(AudioContext);
  const match = useParams<{ name: string }>();
  const [track, setTrack] = useState<song>();
  
  useEffect(() => {
    Tracks.filter((item:song) =>
      item.title === match.name ? setTrack(item) : false
    );
    Tracks.filter((item:song) =>
      item.title === match.name ? setList(item) : false
    );
    // eslint-disable-next-line
  }, [match]);


  return (
    <div className="profile">
      <div
        className="profile_img"
      >
        <img src={track?.img} alt=""/>
        <CircleButton classType={black} type={white} />
      </div>
      <div className="profile_text">
        <span>EXPLICIT</span>
        <h2>{track?.title}</h2>
        <p>{track?.name}</p>
      </div>
    </div>
  );
};
