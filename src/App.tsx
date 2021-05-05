import React, { Component } from 'react'
import { useTheme } from '@itwin/itwinui-react'

import './App.css'
import Header from './components/general-components/Header'
import Board from './components/board-components/Board'


function App() {
  useTheme('dark')
  return (
    <div className="App">
      <Header />
      <div className="app-grid">
        <Board />
      </div>
    </div>
  );
}

export default App;
