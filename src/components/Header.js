import React from "react";
import "./Header.css";

export const Header = ({ onClick, isClicked }) => {
  return (
    <header className="header">
      <div className="header_container container">
        <a href="/" className="logo">
          NEVĚŘ TICHU!
        </a>
        {/* <p className="subtitle">
          Každý krok rozhoduje. Udrž si zdraví a co nejvíce síly až do konce
          svého příběhu.
        </p> */}
        {!isClicked && (
          <button onClick={onClick} className="btn_start">
            Začít hrát
          </button>
        )}
      </div>
    </header>
  );
};
