import React from "react";
import ReactGA from "react-ga4";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { UserNav } from "./components/UserNav";
import { MobileUserNav } from "./components/MobileUserNav";
import { GameBook } from "./components/GameBook";
import { useMediaQuery } from "react-responsive";
import { AvoidCheating } from "./components/AvoidCheating";

const TRACKING_ID = "G-S4F2CQVK9Z";

export const App = () => {
  const [isStoryStarted, setIsStoryStarted] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [currentPartId, setCurrentPartId] = React.useState("start");

  const [diceRoll, setDiceRoll] = React.useState(null);

  const diceClicked = diceRoll !== null;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");

    const savedName = localStorage.getItem("userName");
    const savedPartId = localStorage.getItem("currentPartId");
    const savedDiceRoll = localStorage.getItem("diceRoll");

    if (savedName) {
      setUserName(savedName);
      setIsStoryStarted(true);
    }
    if (savedPartId) {
      setCurrentPartId(savedPartId);
    }
    if (savedDiceRoll !== null) {
      setDiceRoll(Number(savedDiceRoll));
    }
  }, []);

  React.useEffect(() => {
    if (isStoryStarted) {
      localStorage.setItem("currentPartId", currentPartId);
      localStorage.setItem("diceRoll", diceRoll);
      localStorage.setItem("diceClicked", JSON.stringify(diceClicked));
    }
  }, [currentPartId, isStoryStarted, diceRoll, diceClicked]);

  const startStory = () => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("currentPartId", currentPartId);
    setIsStoryStarted(true);
  };

  const resetAll = () => {
    setDiceRoll(null);
    setCurrentPartId("start");
  };

  const resetAllAndLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("currentPartId");
    resetAll();

    setUserName("");
    setIsStoryStarted(false);
  };

  return (
    <div className="container">
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "60px",
        }}>
        {!isStoryStarted && (
          <Login
            onClick={startStory}
            isClicked={isStoryStarted}
            setUserName={setUserName}
          />
        )}

        {isStoryStarted &&
          (isMobile ? (
            <MobileUserNav
              userName={userName}
              endStory={resetAll}
              diceRoll={diceRoll}
              setDiceRoll={setDiceRoll}
              diceClicked={diceClicked}
              currentPartId={currentPartId}
              resetAllAndLogout={resetAllAndLogout}
            />
          ) : (
            <UserNav
              userName={userName}
              endStory={resetAll}
              diceRoll={diceRoll}
              setDiceRoll={setDiceRoll}
              diceClicked={diceClicked}
              currentPartId={currentPartId}
              resetAllAndLogout={resetAllAndLogout}
            />
          ))}

        {isStoryStarted && (
          <AvoidCheating diceRoll={diceRoll} setDiceRoll={setDiceRoll}>
            <GameBook
              key={diceClicked}
              endStory={resetAll}
              currentPartId={currentPartId}
              setCurrentPartId={setCurrentPartId}
              userName={userName}
              setDiceRoll={setDiceRoll}
              diceRoll={diceRoll}
              diceClicked={diceClicked}
            />
          </AvoidCheating>
        )}
      </div>
    </div>
  );
};
