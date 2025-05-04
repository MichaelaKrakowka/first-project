import React from "react";
import { Header } from "./components/Header";
import { GameBook } from "./components/GameBook";

export const App = () => {
  const [isStoryStarted, setIsStoryStarted] = React.useState(false);

  const startStory = () => {
    setIsStoryStarted(true);
  };

  const endStory = () => {
    setIsStoryStarted(false);
  };

  return (
    <div>
      <Header onClick={startStory} isClicked={isStoryStarted} />
      {isStoryStarted && <GameBook endStory={endStory} />}
    </div>
  );
};
