import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  return (props.score);
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequirsed,
};

export default CurrentScore;