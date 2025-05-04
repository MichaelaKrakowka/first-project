import React from "react";
import { story } from "./story";
import "./GameBook.css";

export const GameBook = ({ endStory }) => {
  const [currentPartId, setCurrentPartId] = React.useState("start");
  const currentPart = story[currentPartId];

  const goToNextPart = (id) => {
    if (id === "konec") {
      endStory();
    }
    return setCurrentPartId(id);
  };

  return (
    <>
      <section className="story_text">{currentPart.text}</section>
      <div className="buttons">
        {currentPart.options.map((option, id) => (
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
