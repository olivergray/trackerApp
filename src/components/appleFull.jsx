import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const division = {
    stroke: '#000000',
    strokeWidth: '3px',
};

const Heart = (props) => {
  const heartStyle = {
    fill: '#30abef',
    stroke: '#000000',
    strokeWidth: '4px',
  };

  const leftSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y,
    },
    initialControlPoint: {
      x: -40,
      y: -25,
    },
    endingControlPoint: {
      x: -40,
      y: 65,
    },
    endingAxis: {
      x: 0,
      y: 45,
    },
  };

  const rightSide = {
    initialAxis: {
      x: props.position.x,
      y: props.position.y,
    },
    initialControlPoint: {
      x: 40,
      y: -25,
    },
    endingControlPoint: {
      x: 40,
      y: 65,
    },
    endingAxis: {
      x: 0,
      y: 45,
    },
  };

  return (
    <g>
      <path
        style={heartStyle}
        d={pathFromBezierCurve(leftSide)}
      />
      <path
        style={heartStyle}
        d={pathFromBezierCurve(rightSide)}
      />
      <line
        x1={props.position.x}
        y1={props.position.y}
        x2={props.position.x}
        y2={props.position.y-15}
        style={division}
      />
    </g>
  );
};

Heart.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Heart;