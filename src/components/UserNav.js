import React from "react";
import "./UserNav.css";

export const UserNav = ({ userName, setCurrentPartId }) => {
  const restartStory = () => {
    setCurrentPartId("start");
  };
  return (
    <div className="navbar">
      <div className="user_btns">
        <button onClick={restartStory} className="user_btn">
          Restartovat
        </button>
        <button className="user_btn">Uložit</button>
      </div>
      <div className="nickname">{userName}</div>
      <section className="main_character">
        <p className="health">Zdraví:</p>
        <div className="inventory">
          Inventář:
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        {/* nebo inventar nastavit jako tabulku table? */}
      </section>
    </div>
  );
};
