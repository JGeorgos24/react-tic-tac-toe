import React, {Component} from 'react';
import Game from './game';
import Board from './board';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square;
