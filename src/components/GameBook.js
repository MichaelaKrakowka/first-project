import React from "react";
import { story } from "./story";
import "./GameBook.css";
import { Dice } from "./Dice";

export const GameBook = ({
  endStory,
  setCurrentPartId,
  currentPartId,
  playerFight,
  setPlayerFight,
  clickedPlayerFight,
  setClickedPlayerFight,
  enemyFight,
  setEnemyFight,
  clickedEnemyFight,
  setClickedEnemyFight,
}) => {
  const currentPart = story[currentPartId];

  const goToNextPart = (id) => {
    if (id === "again") {
      endStory();
      return;
    }
    setCurrentPartId(id);
  };

  if (currentPartId === "fight") {
    return (
      <div>
        <Dice
          diceRoll={playerFight}
          setDiceRoll={setPlayerFight}
          diceClicked={clickedPlayerFight}
          setDiceClicked={setClickedPlayerFight}
        />
        <Dice
          diceRoll={enemyFight}
          setDiceRoll={setEnemyFight}
          diceClicked={clickedEnemyFight}
          setDiceClicked={setClickedEnemyFight}
        />
      </div>
    );
  }

  return (
    <div className="story_text">
      {currentPart.text}
      <div className="buttons">
        {currentPart.options.map((option, id) => (
          <button
            className="btn"
            key={id}
            onClick={() => goToNextPart(option.id)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};
