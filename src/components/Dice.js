import React from "react";
import "./Dice.css";

export const Dice = ({
  diceRoll,
  setDiceRoll,
  diceClicked,
  setDiceClicked,
}) => {
  const handleRoll = () => {
    if (!diceClicked) {
      const min = 1;
      const max = 6;
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      setDiceRoll(randomNumber);
      setDiceClicked(true);
    }
  };

  return (
    <div>
      <button
        className="dice"
        onClick={handleRoll}
        disabled={diceClicked}
        style={{
          backgroundColor: diceClicked ? "#e2c17c" : "rgb(12, 19, 15, 0)",
        }}>
        <span style={{ fontSize: "1.3rem" }}>{diceRoll || "🎲"}</span>
      </button>
    </div>
  );
};
