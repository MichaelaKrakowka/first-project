import React from "react";
import { Dice } from "./Dice";
import "./Fight.css";

export const Fight = ({ userName, diceRoll, goToNextPart }) => {
  const [player, setPlayer] = React.useState({ dice1: null, dice2: null });
  const [enemy, setEnemy] = React.useState({ dice1: null, dice2: null });

  const playerTotal =
    (diceRoll ? diceRoll : 0) +
    (player.dice1 ? player.dice1 : 0) +
    (player.dice2 ? player.dice2 : 0);

  const enemyTotal =
    (enemy.dice1 ? enemy.dice1 : 0) + (enemy.dice2 ? enemy.dice2 : 0);

  const playerFought = player.dice1 !== null && player.dice2 !== null;
  const enemyFought = enemy.dice1 !== null && enemy.dice2 !== null;

  return (
    <div className="fight_container">
      <div className="fight_note">
        <p>Chceš zvednout kladivo, zničit přístroj a tím porazit nepřítele?</p>
        <p>
          Součet hodu dvěma kostkami a tvé zbývající síly musí být alespoň tak
          vysoký jako soupeřův.
        </p>
      </div>
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
        <div className="finish_fight">
          {playerTotal >= enemyTotal &&
            "Sebral jsem poslední zbytky síly a kladivem jsem trefil přímo doprostřed přístroje. Cítil jsem, jakoby se dům nadechl, jakoby čekal na tento okamžik. Dědeček otevřel dveře do něčeho, co neměl. A zavřel je, jak nejlépe dovedl. Já jsem je jen zapečetil. Aby už nikdo další neskončil v tom tichu."}
          {playerTotal < enemyTotal &&
            "Všechno se pomalu nořilo do temnoty hlubší než je smrt. Pak jsem najednou stál stranou. Viděl jsem, jak moje tělo klidně odchází z místnosti. Pak se na okamžik otočilo… a usmálo se. V tu chvíli jsem pochopil: já tu zůstal v tom tichu, ve tmě a někdo jiný právě začal žít můj život."}
          <button
            className="btn finish_btn"
            onClick={() =>
              goToNextPart(playerTotal < enemyTotal ? "finishLost" : "finish")
            }>
            KONEC
          </button>
        </div>
      )}
    </div>
  );
};
