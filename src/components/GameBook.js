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
  diceRoll,
  setDiceRoll,
}) => {
  const storyTopRef = React.useRef(null);
  const [showMinusStrength, setShowMinusStrength] = React.useState(false);

  const [player, setPlayer] = React.useState({ dice1: null, dice2: null });
  const [enemy, setEnemy] = React.useState({ dice1: null, dice2: null });

  const playerTotal = diceRoll + player.dice1 + player.dice2;
  const enemyTotal = enemy.dice1 + enemy.dice2;
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

    setCurrentPartId(id);

    setTimeout(() => {
      storyTopRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const playerFought = player.dice1 !== null && player.dice2 !== null;
  const enemyFought = enemy.dice1 !== null && enemy.dice2 !== null;

  if (currentPartId === "fight") {
    return (
      <div className="story_text" ref={storyTopRef}>
        {currentPart.text}
        <div className="fight_container">
          <p className="fight_note">
            Chceš zvednout kladivo, zničit přístroj a tím porazit nepřítele?
            Součet hodu dvěma kostkami a tvé síly musí být alespoň tak vysoký
            jako soupeřův.
          </p>
          <div className="dices">
            <div className="fight_dice">
              {userName}:
              <Dice
                diceRoll={player.dice1}
                setDiceRoll={(newValue) =>
                  setPlayer((prev) => {
                    return {
                      ...prev,
                      dice1: newValue,
                    };
                  })
                }
              />{" "}
              +{" "}
              <Dice
                diceRoll={player.dice2}
                setDiceRoll={(newValue) =>
                  setPlayer((prev) => {
                    return {
                      ...prev,
                      dice2: newValue,
                    };
                  })
                }
              />
              = {playerTotal}
            </div>
            <div className="fight_dice">
              Nepřítel:
              <Dice
                diceRoll={enemy.dice1}
                setDiceRoll={(newValue) =>
                  setEnemy((prev) => {
                    return { ...prev, dice1: newValue };
                  })
                }
              />
              +
              <Dice
                diceRoll={enemy.dice2}
                setDiceRoll={(newValue) =>
                  setEnemy((prev) => {
                    return { ...prev, dice2: newValue };
                  })
                }
              />
              = {enemyTotal}
            </div>
          </div>

          {playerFought && enemyFought && diceRoll !== null && (
            <div>
              {playerTotal > enemyTotal &&
                "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik. Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v tom tichu."}
              {playerTotal < enemyTotal &&
                "Všechno se pomalu nořilo do temnoty hlubší než je smrt. Pak jsem najednou stál stranou. Viděl jsem, jak moje tělo klidně odchází z místnosti. Pak se na okamžik otočilo… a usmálo se. V tu chvíli jsem pochopil: já tu zůstal v tom tichu, ve tmě a někdo jiný právě začal žít můj život."}
              {playerTotal === enemyTotal &&
                "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik. Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v tom tichu."}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="story_text" ref={storyTopRef}>
      {currentPart.text}

      <div className="buttons">
        <AnimatePresence>
          {showMinusStrength && (
            <motion.div
              className="minus_strength"
              initial={{ opacity: 1, y: 0 }}
              // animate={{ opacity: 0, y: -10 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4 }}>
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
