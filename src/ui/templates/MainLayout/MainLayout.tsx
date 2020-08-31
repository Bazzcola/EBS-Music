import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProviderAudioContext } from 'ui/context/audioContext';
import { TrackList } from 'ui/molecules/TrackList/TrackList';
import { MusicBar } from 'ui/organisms/MusicBar/MusicBar';
import { Profile } from 'ui/molecules/Profile/Profile';
import 'ui/templates/MainLayout/MainLayout.scss';

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
                    <Profile />
                </Route>
            </Switch>
                <div className="music_bar__container">
                    <MusicBar />
                </div>
            </div>
        </Router>
    </ProviderAudioContext>
    )
}