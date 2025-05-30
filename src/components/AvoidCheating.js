import React from "react";
import { Dice } from "./Dice";

export const AvoidCheating = ({ diceRoll, setDiceRoll, children }) => {
  const diceClicked = diceRoll !== null;

  return (
    <div style={{ textAlign: "center" }}>
      {!diceClicked ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <p
            style={{
              margin: "17px",
              fontSize: "1.2rem",
              fontStyle: "italic",
            }}>
            Teď je čas hodit si kostkou a určit svou sílu. Síla ti bude při
            některých rozhodnutích ubývat, proto jednej s rozvahou. Kostku
            najdeš v levém menu spolu s výsledkem hodu, nebo můžeš použít kostku
            níže.
          </p>
          <Dice diceRoll={diceRoll} setDiceRoll={setDiceRoll} />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
