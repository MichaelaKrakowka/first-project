import React from "react";
import "./Login.css";

export const Login = ({ onClick, isClicked, setUserName }) => {
  const [localName, setLocalName] = React.useState("");

  const handleSubmit = (e) => {
    setUserName(localName);
    onClick();
  };

  return (
    <form className="user_info" onSubmit={handleSubmit}>
      <label className="user_name">Napiš jméno:</label>
      <input
        style={{ fontSize: "1.1rem", fontWeight: "400", paddingLeft: "7px" }}
        className="input"
        type="text"
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />
      <div className="submit">
        {!isClicked && (
          <button className="submit_btn" type="submit">
            Začít hrát
          </button>
        )}
      </div>
    </form>
  );
};
