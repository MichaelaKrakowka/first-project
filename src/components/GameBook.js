import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showMinusStrength, setShowMinusStrength] = React.useState(false);
  const playerTotal = diceRoll + playerFight + playerFight2;
  const enemyTotal = enemyFight + enemyFight2;
  const currentPart = story[currentPartId];

  const goToNextPart = (id) => {
    if (["checkTheClock", "goHome", "whiskey", "checkTheClock2"].includes(id)) {
      setShowMinusStrength(true);
      setDiceRoll((prev) => Math.max(prev - 1, 0));
      setTimeout(() => setShowMinusStrength(false), 3000);
    }
    if (id === "again") {
      return endStory();
    }

    return setCurrentPartId(id);
  };

  if (currentPartId === "fight") {
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
            Chceš zvednout kladivo, zničit přístroj a tím porazit nepřítele?
            Součet hodu dvěma kostkami a tvé síly musí být alespoň tak vysoký
            jako soupeřův.
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

          {clickedPlayerFight &&
            clickedPlayerFight2 &&
            clickedEnemyFight &&
            clickedEnemyFight2 &&
            typeof diceRoll === "number" && (
              <div>
                {playerTotal > enemyTotal &&
                  "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik.Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v  tom tichu."}
                {playerTotal < enemyTotal &&
                  "Všechno se pomalu nořilo do temnoty hlubší než je smrt. Pak jsem najednou stál stranou. Viděl jsem, jak moje tělo klidně odchází z místnosti. Pak se na okamžik otočilo… a usmálo se. V tu chvíli jsem pochopil: já tu zůstal v tom tichu, ve tmě a někdo jiný právě začal žít můj život."}
                {playerTotal === enemyTotal &&
                  "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik.Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v  tom tichu."}
              </div>
            )}
        </div>
      </div>
    );
  }

  return (
    <div className="story_text">
      {currentPart.text}

      <div className="buttons">
        <AnimatePresence>
          {showMinusStrength && (
            <motion.div
              className="minus_strength"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -10 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}>
              –1 síla
            </motion.div>
          )}
        </AnimatePresence>
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
