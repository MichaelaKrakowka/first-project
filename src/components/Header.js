import React from "react";
import "./Header.css";
import { BgMusic } from "./BgMusic";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_content">
          <h1 className="logo">NEVĚŘ TICHU!</h1>
          <BgMusic />
        </div>
      </div>
    </header>
  );
};
