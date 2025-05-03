import React from "react";
import { Header } from "./components/Header";
import { MainStory } from "./components/MainStory";
import { GameBook } from "./components/StoryData";

export const App = () => {
  const [isStoryStarted, setIsStoryStarted] = React.useState(false);
  const startStory = () => {
    setIsStoryStarted(true);
  };

  return (
    <div>
      <Header onClick={startStory} isClicked={isStoryStarted} />
      <MainStory isClicked={isStoryStarted} />
      {isStoryStarted && <GameBook />}
    </div>
  );
};
