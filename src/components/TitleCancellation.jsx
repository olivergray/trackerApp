import React from 'react';

const Title = () => {
  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -250, // 150 up
    style: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 70,
      fill: '#cbca62',
    },
  };

  return (
    <g>
      <text {...text}>
          The Cancellation Task
      </text>
    </g>
  );
};

export default Title;