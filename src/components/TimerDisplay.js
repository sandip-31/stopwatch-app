import React from 'react';
import PropTypes from 'prop-types';

const TimerDisplay = ({ time }) => {
  const formatTime = (time) => {
    const milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return <div className="timer-display">{formatTime(time)}</div>;
};

TimerDisplay.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimerDisplay;
