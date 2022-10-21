/*The Timer component renders a self timer component for the game which using useEffect and 
setInterval starting from milliseconds, seconds then minutes all props are passed down from the 
Game component then the GameContent component.*/
function Timer({ time, setTimeOn, setTime }) {
  return (
    <div>
      {/* minutes display converted from milliseconds */}
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      {/* seconds display converted from milliseconds */}
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      {/* milliseconds display */}
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      {/* timer controls */}
      <div className="timer-buttons">
        <button onClick={() => setTimeOn(true)}>
          <i className="bi bi-play-fill"></i>
        </button>
        <button onClick={() => setTimeOn(false)}>
          <i className="bi bi-stop-fill"></i>
          <i className="bi bi-pause-fill"></i>
        </button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
