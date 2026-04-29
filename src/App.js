import React from "react";
import { Header } from "./components/Header";
import { Login } from "./components/Login";

import { DialogUserNav } from "./components/DialogUserNav";
import { GameBook } from "./components/GameBook";

import { AvoidCheating } from "./components/AvoidCheating";
import CookieConsent from "./components/CookieConsent";

export const App = () => {
  const [isStoryStarted, setIsStoryStarted] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [currentPartId, setCurrentPartId] = React.useState("start");

  const [diceRoll, setDiceRoll] = React.useState(null);

  const diceClicked = diceRoll !== null;

  React.useEffect(() => {
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
      <CookieConsent />
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

        {isStoryStarted && (
          <DialogUserNav
            userName={userName}
            endStory={resetAll}
            diceRoll={diceRoll}
            setDiceRoll={setDiceRoll}
            diceClicked={diceClicked}
            currentPartId={currentPartId}
            resetAllAndLogout={resetAllAndLogout}
          />
        )}

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
