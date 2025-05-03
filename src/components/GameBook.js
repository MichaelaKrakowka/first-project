import React from "react";
import { story } from "./story";
import "./GameBook.css";

export const GameBook = () => {
  const [currentPart, setCurrentPart] = React.useState("start");
  const findCurrentPart = story.find((part) => part.id === currentPart);

  const goToNextPart = (id) => {
    setCurrentPart(id);
  };

  return (
    <>
      <p className="story_text">{findCurrentPart.text}</p>

      <div className="buttons">
        {findCurrentPart.options.map((option, id) => (
          <button
            className="btn"
            key={id}
            onClick={() => goToNextPart(option.id)}>
            {option.text}
          </button>
        ))}
      </div>
    </>
  );
};
