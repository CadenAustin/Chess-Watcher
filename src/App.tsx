import React, { Component } from 'react';
import './App.css';
import Header from './components/general-components/Header'
import Board from './components/board-components/Board'

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
