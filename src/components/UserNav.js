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
  currentPartId,
  resetAllAndLogout,
}) => {
  return (
    <div className="navbar">
      <button className="user_btn" onClick={resetAllAndLogout}>
        Nová hra včetně nového přihlášení
      </button>
      <p className="who_play">Hraje:</p>
      <div className="nickname">{userName}</div>

      <div className="user_btns">
        <button onClick={endStory} className="user_btn">
          Nová hra
        </button>
        <button
          className="user_btn"
          onClick={() => {
            localStorage.setItem("userName", userName);
            localStorage.setItem("currentPartId", currentPartId);
            alert("Uloženo!");
          }}>
          Uložit
        </button>
      </div>
      <BgMusic />
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
