import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login.js';
import {getTokenFromUrl} from './spotify'

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    
  }, []);

  return (
    <div className="App">
      {/* Spotify Logo */}
      {/* Spotify Login */}
      <Login />
    </div>
  );
}

export default App;
