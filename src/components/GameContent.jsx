import React from "react";
// importing Timer component
import Timer from "./Timer";

/*The GameContent Component returns all the text elements for the game
including the score and timer that get updated using state props*/
function GameContent({
  onAssist,
  score,
  time,
  setTime,
  setTimeOn,
  refreshPage,
}) {
  return (
    <div className="content-wrapper">
      <div className="row">
        {/* restart game button */}
        <span>Restart Game</span>
        <button onClick={refreshPage} className="reset-btn">
          <i className="bi bi-arrow-clockwise"></i>
        </button>
      </div>

      <div className="content">
        {/* Timer component */}
        <Timer time={time} setTimeOn={setTimeOn} setTime={setTime} />
        <h2>SCORE:{score ? score : " 0"}</h2>
        <p>
          Use the help button below to see how the game works. To challenge
          yourself use the timer and see how long you took to complete the game.
        </p>
        {/* get help button that triggers dialog box */}
        <button className="cta-btn" onClick={() => onAssist(true)}>
          Get Help
        </button>
      </div>
    </div>
  );
}

export default GameContent;
