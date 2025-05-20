import React from "react";
import { BgMusic } from "./BgMusic"; //nove

import "./UserNav.css";
import { Dice } from "./Dice";

export const UserNav = ({
  userName,
  endStory,
  diceRoll,
  setDiceRoll,
  diceClicked,
  setDiceClicked,
}) => {
  return (
    <div className="navbar">
      <div className="user_btns">
        <button onClick={endStory} className="user_btn">
          Restartovat
        </button>
        <button className="user_btn">Uložit</button>
      </div>
      <BgMusic />

      <p className="who_play">Hraje:</p>
      <div className="nickname">{userName}</div>
      <section className="main_character">
        <div className="strength">
          Síla:
          <Dice
            diceRoll={diceRoll}
            setDiceRoll={setDiceRoll}
            diceClicked={diceClicked}
            setDiceClicked={setDiceClicked}
          />
        </div>
      </section>
    </div>
  );
};
