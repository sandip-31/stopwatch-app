import React, { useState, useRef } from 'react';
import TimerDisplay from './TimerDisplay';
import Button from './Button';
import '../styles/Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [finalElapsedTime, setFinalElapsedTime] = useState(null);
  const intervalRef = useRef(null);

  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
    }
    setIsRunning(!isRunning);
    setFinalElapsedTime(null); 
  };

  const stopTimer = () => {
    if (isRunning || time > 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setFinalElapsedTime(time);
      setTime(0);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setFinalElapsedTime(null); 
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      {!!finalElapsedTime  && (
        <div className="final-time">
          Final Elapsed Time: <TimerDisplay time={finalElapsedTime} />
        </div>
      )}
      <TimerDisplay time={time} />
      <div className="buttons">
        <Button onClick={startPauseTimer} label={isRunning ? 'Pause' : 'Start'} />
        <Button onClick={stopTimer} label="Stop" />
        <Button onClick={resetTimer} label="Reset" />
      </div>
    </div>
  );
};

export default Stopwatch;
