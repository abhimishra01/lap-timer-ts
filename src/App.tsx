import { useState } from 'react';
import './App.css';

const buttonStyle = {
  border: '1px solid black',
};
const DEFAULT_COUNT = 0;

function App() {
  const [count, setCount] = useState<number>(DEFAULT_COUNT);
  const [timer, setTimer] = useState<any>(null);
  const [laps, setLaps] = useState<Array<number>>([]);

  const handleStart = () =>
    setTimer(
      setInterval(
        () =>
          setCount((prevCount) => {
            return prevCount + 1;
          }),
        1000
      )
    );

  const handleStop = () => clearInterval(timer);
  const handleReset = () => {
    clearInterval(timer);
    setLaps([]);
    setCount(DEFAULT_COUNT);
  };

  const handleLap = () => setLaps([...laps, count]);

  return (
    <>
      <h3>{count}</h3>
      <div>
        <button onClick={handleStart} style={buttonStyle}>
          start
        </button>

        <button onClick={handleStop} style={buttonStyle}>
          stop
        </button>
        <button onClick={handleReset} style={buttonStyle}>
          reset
        </button>
        <button onClick={handleLap} style={buttonStyle}>
          lap
        </button>
      </div>

      <div style={{ display: laps.length === 0 ? 'hidden' : 'block' }}>
        <ul>{laps.length > 0 ? laps.map((lap) => <li>{lap}</li>) : <></>}</ul>
      </div>
    </>
  );
}

export default App;

// state = count
// state :- startTimer
// render count :- h3 el
// buttons :- start, stop, reset, lap
// handleStart :- startTimer = setInterval(count ++, 1000)
// handleStop :- clearInterval(startTimer)

// Laps
// state :- laps Array[]
// takeLap :- [...laps, currentCount]
// render laps :- laps.map(lap => <li> lap</li>)

// handleReset :- clearInterval(startTimer), setCount(0), setLaps([])
