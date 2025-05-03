import React from "react";
import { Header } from "./components/Header";
import { GameBook } from "./components/StoryData";

export const App = () => {
  const [isStoryStarted, setIsStoryStarted] = React.useState(false);
  const startStory = () => {
    setIsStoryStarted(true);
  };

  return (
    <div>
      <Header onClick={startStory} isClicked={isStoryStarted} />
      {isStoryStarted && <GameBook />}
    </div>
  );
};
