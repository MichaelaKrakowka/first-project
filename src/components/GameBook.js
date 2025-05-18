import React from "react";
import { story } from "./story";
import "./GameBook.css";
import { Dice } from "./Dice";

export const GameBook = ({
  userName,
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
  setDiceRoll,
}) => {
  const currentPart = story[currentPartId];

  const goToNextPart = (id) => {
    if (["checkTheClock", "goHome", "whiskey", "checkTheClock2"].includes(id)) {
      setDiceRoll((prev) => Math.max(prev - 1, 0));
    } else if (id === "again") {
      return endStory();
    }

    return setCurrentPartId(id);
  };

  if (currentPartId === "fight") {
    return (
      <div className="story_text">
        {currentPart.text}
        <div className="fight_container">
          <p>
            Abys přežil, musí být tvá výsledná síla po hodu dvěmi kostkami vyšší
            než ta nepřítelova. Síla nepřítele je 6.
          </p>
          <div className="dices">
            <div>
              {userName}:
              <Dice
                diceRoll={playerFight}
                setDiceRoll={setPlayerFight}
                diceClicked={clickedPlayerFight}
                setDiceClicked={setClickedPlayerFight}
              />
            </div>
            <div>
              {" "}
              Nepřítel:
              <Dice
                diceRoll={enemyFight}
                setDiceRoll={setEnemyFight}
                diceClicked={clickedEnemyFight}
                setDiceClicked={setClickedEnemyFight}
              />
            </div>
          </div>
        </div>
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
