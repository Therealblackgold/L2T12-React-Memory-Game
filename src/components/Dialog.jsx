import React from "react";
import DialogBtn from "./DialogBtn";
import { Link } from "react-router-dom";

/*This component returns a dialog box using props for the onDialog click function
and passing button and refreshPage props to the child component DialogBtn*/
const Dialog = ({ message, onDialog, button, refreshPage }) => {
  return (
    <div
      className="game-dialog"
      style={{
        position: "fixed",
        top: "0",
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "#26262e",
          padding: "50px",
        }}
      >
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            // textTransform: "uppercase",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          {message}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <Link
            // onClick={onDialog(true)}
            // onClick={() => onDialog(true)}
            to="/goodbye"
            style={{
              textAlign: "center",
              textDecoration: "none",
              background: "red",
              color: "white",
              padding: "10px",
              fontSize: "13px",
              fontWeight: "600",
              minWidth: "100px",
              marginRight: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Quit
          </Link>
          <DialogBtn
            onDialog={onDialog}
            button={button}
            refreshPage={refreshPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialog;
