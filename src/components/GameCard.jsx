import React from "react";

const GameCard = ({ item, id, handleClick }) => {
  const itemClass = item.status ? " active " + item.status : "";
  return (
    <div className={"game-card" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} alt={item.id} />
    </div>
  );
};

export default GameCard;
