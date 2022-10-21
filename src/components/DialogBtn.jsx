/*This component returns 2 different buttons that will be rendered based on the 
button prop passed down from the Game component which switches the button based
on weather the dialog is for the "help* or "completed" function.*/
function DialogBtn({ onDialog, button, refreshPage }) {
  return (
    <>
      {button === "help" ? (
        <button
          onClick={() => onDialog(false)}
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            fontSize: "15px",
            minWidth: "100px",
            fontWeight: "bold",
            marginLeft: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      ) : (
        <button
          onClick={refreshPage}
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            fontSize: "15px",
            minWidth: "100px",
            fontWeight: "700",
            marginLeft: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Play
        </button>
      )}
    </>
  );
}

export default DialogBtn;
