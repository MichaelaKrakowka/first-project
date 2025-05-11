import React from "react";
import ReactGA from "react-ga4";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { UserNav } from "./components/UserNav";
import { GameBook } from "./components/GameBook";

const TRACKING_ID = "G-S4F2CQVK9Z";

export const App = () => {
  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  const [isStoryStarted, setIsStoryStarted] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [currentPartId, setCurrentPartId] = React.useState("start");

  const startStory = () => {
    setIsStoryStarted(true);
  };

  const endStory = () => {
    setCurrentPartId("start");
  };

  return (
    <div className="container">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        {!isStoryStarted && (
          <Login
            onClick={startStory}
            isClicked={isStoryStarted}
            setUserName={setUserName}
          />
        )}
        {isStoryStarted && <UserNav userName={userName} endStory={endStory} />}
        {isStoryStarted && (
          <GameBook
            endStory={endStory}
            currentPartId={currentPartId}
            setCurrentPartId={setCurrentPartId}
          />
        )}
      </div>
    </div>
  );
};
