import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProviderAudioContext } from 'ui/context/audioContext';
import { TrackList } from 'ui/components/molecules/TrackList/TrackList';
import { MusicBar } from 'ui/components/organisms/MusicBar/MusicBar';
import { Profile } from 'ui/components/molecules/Profile/Profile';
import 'ui/components/templates/MainLayout/MainLayout.scss';

export const MainLayout = () => {
  return (
    <ProviderAudioContext>
      <Router>
        <div className="main_container">
          <Switch>
            <Route path="/" exact>
              <TrackList />
            </Route>
            <Route path="/:name">
              <div className="profile_container">
                <Profile />
              </div>
            </Route>
          </Switch>
          <div className="music_bar__container">
            <MusicBar />
          </div>
        </div>
      </Router>
    </ProviderAudioContext>
  );
};
