import React from "react";
import "./User.css";

export const User = () => {
  const [userName, setUserName] = React.useState("");

  return (
    <div className="navbar">
      <div className="user_btns">
        <button className="user_btn">Restartovat</button>
        <button className="user_btn">Uložit</button>
      </div>
      <form className="user_info">
        <label className="user_name">Napiš jméno:</label>
        <input
          className="input"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="submit">
          <button className="submit_btn" type="submit">
            Přihlásit
          </button>
        </div>
      </form>
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
