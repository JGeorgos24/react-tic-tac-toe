import React,{Component} from 'react';
import './App.css';
import Square from './components/squares';
import Game from './components/game';
import Board from './components/board';


function App() {
  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App;

