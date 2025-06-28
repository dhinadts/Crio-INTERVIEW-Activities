import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `${minutes % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(seconds)}</p>
      <div>
        <button onClick={toggle} style={{ padding: "10px 20px" }}>
          {isActive ? "Stop" : "Start"}
        </button>
        <button onClick={reset} style={{ padding: "10px 20px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
