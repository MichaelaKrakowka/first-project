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

  const [diceRoll, setDiceRoll] = React.useState(0);
  const [diceClicked, setDiceClicked] = React.useState(false);

  const [playerFight, setPlayerFight] = React.useState(0);
  const [clickedPlayerFight, setClickedPlayerFight] = React.useState(false);
  const [enemyFight, setEnemyFight] = React.useState(0);
  const [clickedEnemyFight, setClickedEnemyFight] = React.useState(false);

  const [playerFight2, setPlayerFight2] = React.useState(0);
  const [clickedPlayerFight2, setClickedPlayerFight2] = React.useState(false);
  const [enemyFight2, setEnemyFight2] = React.useState(0);
  const [clickedEnemyFight2, setClickedEnemyFight2] = React.useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");

    const savedName = localStorage.getItem("userName");
    const savedPartId = localStorage.getItem("currentPartId");
    const savedDiceRoll = localStorage.getItem("diceRoll");
    const savedDiceClicked = localStorage.getItem("diceClicked");

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
    if (savedDiceClicked !== null) {
      setDiceClicked(JSON.parse(savedDiceClicked));
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
    setDiceClicked(false);
    setDiceRoll(0);
    setPlayerFight(0);
    setClickedPlayerFight(false);
    setEnemyFight(0);
    setClickedEnemyFight(false);
    setPlayerFight2(0);
    setClickedPlayerFight2(false);
    setEnemyFight2(0);
    setClickedEnemyFight2(false);
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

      <div style={{ display: "flex", justifyContent: "center" }}>
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
              setDiceClicked={setDiceClicked}
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
              setDiceClicked={setDiceClicked}
              currentPartId={currentPartId}
              resetAllAndLogout={resetAllAndLogout}
            />
          ))}

        {isStoryStarted && (
          <AvoidCheating
            diceRoll={diceRoll}
            setDiceRoll={setDiceRoll}
            diceClicked={diceClicked}
            setDiceClicked={setDiceClicked}>
            <GameBook
              endStory={resetAll}
              currentPartId={currentPartId}
              setCurrentPartId={setCurrentPartId}
              playerFight={playerFight}
              setPlayerFight={setPlayerFight}
              clickedPlayerFight={clickedPlayerFight}
              setClickedPlayerFight={setClickedPlayerFight}
              enemyFight={enemyFight}
              setEnemyFight={setEnemyFight}
              clickedEnemyFight={clickedEnemyFight}
              setClickedEnemyFight={setClickedEnemyFight}
              userName={userName}
              setDiceRoll={setDiceRoll}
              playerFight2={playerFight2}
              setPlayerFight2={setPlayerFight2}
              clickedPlayerFight2={clickedPlayerFight2}
              setClickedPlayerFight2={setClickedPlayerFight2}
              enemyFight2={enemyFight2}
              setEnemyFight2={setEnemyFight2}
              clickedEnemyFight2={clickedEnemyFight2}
              setClickedEnemyFight2={setClickedEnemyFight2}
              diceRoll={diceRoll}
              diceClicked={diceClicked}
            />
          </AvoidCheating>
        )}
      </div>
    </div>
  );
};
