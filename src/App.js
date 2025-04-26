import React from "react";
import { Header } from "./components/Header";
import { MainStory } from "./components/MainStory";

export const App = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const startStory = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <Header onClick={startStory} />
      <MainStory isClicked={isClicked} />
    </div>
  );
};
