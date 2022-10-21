// react hooks
import React, { useState, useEffect } from "react";
// importing Card component
import GameCard from "./GameCard";
import GameContent from "./GameContent";

// image imports/The public folder could be used to avoid this long import
import DINO1 from "../images/db1.png";
import DINO2 from "../images/db2.png";
import DINO3 from "../images/db3.png";
import DINO4 from "../images/db4.png";
import DINO5 from "../images/db5.png";
import DINO6 from "../images/db6.png";
import DINO7 from "../images/db7.png";
import DINO8 from "../images/db8.png";
import Dialog from "./Dialog";

function Game() {
  // Declaring items state
  const [items, setItems] = useState(
    [
      { id: "1", img: DINO1, status: "" },
      { id: "1", img: DINO1, status: "" },
      { id: "2", img: DINO2, status: "" },
      { id: "2", img: DINO2, status: "" },
      { id: "3", img: DINO3, status: "" },
      { id: "3", img: DINO3, status: "" },
      { id: "4", img: DINO4, status: "" },
      { id: "4", img: DINO4, status: "" },
      { id: "5", img: DINO5, status: "" },
      { id: "5", img: DINO5, status: "" },
      { id: "6", img: DINO6, status: "" },
      { id: "6", img: DINO6, status: "" },
      { id: "7", img: DINO7, status: "" },
      { id: "7", img: DINO7, status: "" },
      { id: "8", img: DINO8, status: "" },
      { id: "8", img: DINO8, status: "" },
    ].sort(() => Math.random() - 0.5)
  );

  // Declaring previous card state starting from -1 so the count will start at 0
  // This will be used to track which item has been clicked.
  const [prev, setPrev] = useState(-1);

  // Declaring score state holds the value of correct items.
  const [score, setScore] = useState("");

  // Declaring timer state simply holds the self timer state
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  /*Declaring dialog state added a button value to switch buttons when the 
  message is for help/how to play the game and when the message is for completing the game  */
  const [dialog, setDialog] = useState({
    button: "",
    message: "text something",
    isLoading: false,
  });

  function check(current) {
    // The "if block" checks if clicked item "current" item "id" matches "previous" item "id"
    // if theres a match give items the "correct" class, set new items array and set previous back to -1.
    // The "else block" does the opposite if the clicked item and the previous item don't match.
    // status gets a "wrong" class, new set items array,reset current to empty string,reset previous to empty string nested inside a setTimeout function of 1 second.
    if (items[current].id === items[prev].id) {
      items[current].status = "correct";
      items[prev].status = "correct";
      setItems([...items]);
      setPrev(-1);
      getScore();
      // console.log(typeof items[current].id);
      // the setTimeout below alerts every time the user gets a match.
      /*setTimeout(() => {
        setDialog({
          message: "CONGRATULATIONS, YOU GOT A MATCH!!!",
          isLoading: true,
        });
      }, 1000);*/
    } else {
      items[current].status = "wrong";
      items[prev].status = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].status = "";
        items[prev].status = "";
        setPrev(-1);
      }, 1000);
    }
  }

  /*handleClick function checks if the previous id is set to -1
  meaning no card has been clicked set previous to the clicked cards id
  set the items status to active ,set new items.
  and if that condition is not true the check function if called to check
  if they are the same which take an id param that is the currently clicked id.*/
  function handleClick(id) {
    if (prev === -1) {
      items[id].status = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  /*The onAssist function handles showing the dialog 
  when the user requests help on how to play the game.*/
  function onAssist() {
    setDialog({
      button: "help",
      message:
        "➡️ Match the cards to win the game ➡️ Every match gets you 2 points. ➡️ Use the self timer to make the game more challenging. 😎️",
      isLoading: true,
    });
    setTimeOn(false);
  }

  /*The onCompletion function handles showing the dialog 
  when the user completes the game.*/
  function onCompletion() {
    setDialog({
      button: "complete",
      message: "CONGRATULATIONS, YOU COMPLETED THE GAME!!!. 😎️",
      isLoading: true,
    });
  }

  // Dialog buttons onClick actions
  const playAgain = (choice) => {
    if (!choice) {
      // remove Dialog component.
      setDialog(false);
    } else {
      // window.location.href = "/goodbye";
      /*Im leaving the else block empty since I replaced
      the quit button with a Link to avoid refreshing
      when redirecting to the goodbyPage component.*/
    }
  };

  /*getScore function keeps count of how many items have the class
  of correct which is displayed as the sore, and its also responsible for 
  calling the onCompletion function that displays a dialog when the user reaches 
  16 items/points with the "correct" className.*/
  function getScore() {
    var array = items.filter((item) => item.status === "correct");
    var correctCount = array.length;
    setScore(correctCount);
    if (correctCount === 16) {
      // pause timer
      setTimeOn(false);
      // run onCompletion function to show the dialog box.
      onCompletion();
    }
  }

  /*Timer/stopwatch functionality using useEffect
  if timeOn is true a setInterval function is called
  to setTime also declared a variable interval so the time can 
  be paused and cleared*/
  useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeOn]);

  // Refresh page to restart the game.
  function refreshPage() {
    window.location.reload();
  }

  /*the return below renders all the components for the game and passes
  the state and functions created above to the child components */
  return (
    <>
      <div className="game">
        <GameContent
          onAssist={onAssist}
          score={score}
          time={time}
          setTimeOn={setTimeOn}
          setTime={setTime}
          refreshPage={refreshPage}
        />
        {/* game container */}
        <div className="container">
          <h1>Dinosaur Park</h1>
          <div className="grid">
            {items.map((item, index) => (
              <GameCard
                key={index}
                item={item}
                id={index}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        {/* including Dialog component to the app */}
        {dialog.isLoading && (
          <Dialog
            message={dialog.message}
            button={dialog.button}
            onDialog={playAgain}
            refreshPage={refreshPage}
          />
        )}
      </div>
    </>
  );
}

export default Game;
