import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import StartGame from './StartGame';
import Title from './TitleCancellation';
import { maxFlyingObjects } from '../utils/constants';
import "./Canvas.css"

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 500 - gameHeight, window.innerWidth, gameHeight];

  var rows = [];

  for (var i = 0; i < maxFlyingObjects; i++) {
    rows[i] = props.gameState.flyingObjects.map(flyingObject => (
    <FlyingObject
      key={flyingObject.id}
      position={flyingObject.position}
    />
    ))
  }

  return (
    <svg
      id="cancellation-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
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
          <StartGame onClick={() => { props.startGame();  props.moveObjects() }} />
          <Title />
        </g>
      }
      {rows}
    </svg>
  );
};

Canvas.propTypes = {
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Canvas;