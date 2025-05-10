import React from "react";
import "./User.css";

export const User = () => {
  const [userName, setUserName] = React.useState("");

  return (
    <div className="navbar">
      <div className="user_btns">
        <button className="user_btn">Restart</button>
        <button className="user_btn">Save</button>
      </div>
      <form className="user_info">
        <p className="user_name">Napiš jméno:</p>
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
        <p className="inventory">
          Inventář:
          <ul></ul>
        </p>
      </section>
    </div>
  );
};
