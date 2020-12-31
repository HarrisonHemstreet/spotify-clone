import React, {useEffect} from 'react';
import './App.css';
import Login from './Login.js';
import {getTokenFromUrl} from './spotify'

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log(token);
  }, [])
  return (
    <div className="App">
      {/* Spotify Logo */}
      {/* Spotify Login */}
      <Login />
    </div>
  );
}

export default App;
