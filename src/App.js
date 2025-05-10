import React from "react";
import ReactGA from "react-ga4";
import { Header } from "./components/Header";
import { GameBook } from "./components/GameBook";
import { User } from "./components/User";

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
    <div className="container">
      <Header onClick={startStory} isClicked={isStoryStarted} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <User />
        {isStoryStarted && <GameBook endStory={endStory} />}
      </div>
    </div>
  );
};
