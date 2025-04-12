import React from "react";

import "./Header.css";
import { HeaderButtons } from "./HeaderButtons";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_container container">
          <a href="/" className="logo">
            Nevěř tichu!
          </a>
          <HeaderButtons />
        </div>
      </header>
    </>
  );
};
