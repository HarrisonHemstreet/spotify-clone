import React, {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login.js';
import {getTokenFromUrl} from './spotify';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist().then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      })
    }
  }, []);
  
  return (
    <div className="App">
      { token ? ( <Player spotify={spotify}/> ) : ( <Login /> ) }
      {/* Spotify Logo */}
      {/* Spotify Login */}
      <Login />
    </div>
  );
}

export default App;
