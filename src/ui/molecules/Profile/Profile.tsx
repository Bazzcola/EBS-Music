import React from 'react';
import { CircleButton } from 'ui/atoms/CircleButton/CircleButton';
import 'ui/molecules/Profile/Profile.scss';

export const Profile = () => {
  const black = 'black';
  const white = 'white';

  return (
    <div className="profile">
      <div
        className="profile_img"
        style={{
          backgroundImage:
            'url(' +
            'https://akket.com/wp-content/uploads/2019/11/World-of-Warcraft-Shadowlands-Blizzard.jpg' +
            ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <CircleButton classType={black} type={white} />
      </div>
      <div className="profile_text">
        <span>EXPLICIT</span>
        <h2>DECADANCE 2</h2>
        <p>Kyok</p>
      </div>
    </div>
  );
};
