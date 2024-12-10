import React from 'react';
import './App.css';
import data from './payload.json';

export default function App() {
  const verbs = data.verbs ?? []

  return (
    <div className="App">
      <div className="AppMessage">Let's {verbs[Math.floor(Math.random() * verbs.length)]}</div>
    </div>
  );
}
