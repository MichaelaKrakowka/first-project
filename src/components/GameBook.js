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
  diceRoll,
  setDiceRoll,
  playerFight2,
  setPlayerFight2,
  clickedPlayerFight2,
  setClickedPlayerFight2,
  enemyFight2,
  setEnemyFight2,
  clickedEnemyFight2,
  setClickedEnemyFight2,
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
    const playerTotal = diceRoll + playerFight + playerFight2;
    const enemyTotal = enemyFight + enemyFight2;
    return (
      <div className="story_text">
        {currentPart.text}
        <div className="fight_container">
          <p
            style={{
              fontSize: "1.8rem",
              fontStyle: "italic",
              paddingTop: "20px",
            }}>
            Abys přežil, musí tvá celková síla po hodu dvěma kostkami překonat
            sílu nepřítele.
          </p>
          <div className="dices">
            <div className="fight_dice">
              {userName}:
              <Dice
                diceRoll={playerFight}
                setDiceRoll={setPlayerFight}
                diceClicked={clickedPlayerFight}
                setDiceClicked={setClickedPlayerFight}
              />{" "}
              +{" "}
              <Dice
                diceRoll={playerFight2}
                setDiceRoll={setPlayerFight2}
                diceClicked={clickedPlayerFight2}
                setDiceClicked={setClickedPlayerFight2}
              />
              = {playerTotal}
            </div>
            <div className="fight_dice">
              Nepřítel:
              <Dice
                diceRoll={enemyFight}
                setDiceRoll={setEnemyFight}
                diceClicked={clickedEnemyFight}
                setDiceClicked={setClickedEnemyFight}
              />
              +
              <Dice
                diceRoll={enemyFight2}
                setDiceRoll={setEnemyFight2}
                diceClicked={clickedEnemyFight2}
                setDiceClicked={setClickedEnemyFight2}
              />{" "}
              = {enemyTotal}
            </div>
          </div>
          <div>
            {playerTotal > enemyTotal &&
              "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik.Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v  tom tichu."}
            {playerTotal < enemyTotal && "Prohrál jsi! 💀"}
            {playerTotal === enemyTotal && "Remíza! 🤝"}
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
