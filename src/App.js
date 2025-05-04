import React from "react";
import ReactGA from "react-ga4";
import { Header } from "./components/Header";
import { GameBook } from "./components/GameBook";

const TRACKING_ID = "G-S4F2CQVK9Z";

export const App = () => {
  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

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
