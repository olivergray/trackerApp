import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';
import Title from './TitleCancellation';
import "./Canvas.css"

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 500 - gameHeight, window.innerWidth, gameHeight];
  
  return (
    <svg
      id="cancellation-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <CurrentScore score={15} />
      { ! props.gameState.started &&
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      }
      { props.gameState.started &&
        <g>
          <FlyingObject position={{x: -150, y: 300}}/>
          <FlyingObject position={{x: 150, y: -600}}/>
        </g>
      }
    </svg>
  );
};

export default Canvas;