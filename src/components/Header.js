import React from "react";
import "./Header.css";

export const Header = ({ onClick }) => {
  return (
    <>
      <header className="header">
        <div className="header_container container">
          <a href="/" className="logo">
            Nevěř tichu!
          </a>
          <button onClick={onClick} className="btn_start">
            Spustit příběh
          </button>
        </div>
      </header>
    </>
  );
};
