import React from "react";
import "./HeaderButtons.css";

export const HeaderButtons = () => {
  return (
    <button
      className="signIn"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        color: "#e2c17c",
        border: "1px solid #e2c17c",
        borderRadius: "5px",
        backgroundColor: "rgba(20, 20, 20, 0.8)",
        padding: "5px 10px",
        marginRight: "30px",
      }}>
      Přihlášení
    </button>
  );
};
