import React from 'react';
import PropTypes from 'prop-types';
import Heart from './appleFull';

const FlyingObject = props => (
  <g>
    <Heart position={props.position} />
  </g>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;