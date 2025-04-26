import React from "react";
import "./Header.css";

export const Header = ({ onClick }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleClickButton = (event) => {
    event.preventDefault();
    setIsVisible(false);
  };
  return (
    <>
      <header className="header">
        <div className="header_container container">
          <a href="/" className="logo">
            NEVĚŘ TICHU!
          </a>
          {isVisible && (
            <button
              onClick={(event) => {
                onClick(event);
                handleClickButton(event);
              }}
              className="btn_start">
              Začít hrát
            </button>
          )}
        </div>
      </header>
    </>
  );
};
