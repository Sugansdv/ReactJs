import React, { useEffect, useState } from 'react';

function Proj3() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: stop the timer when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default Proj3;