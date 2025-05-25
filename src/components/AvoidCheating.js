import React from "react";
import { useMediaQuery } from "react-responsive";
import { Dice } from "./Dice";

export const AvoidCheating = ({ diceRoll, setDiceRoll, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 797px)" });
  const diceClicked = diceRoll !== null;

  return (
    <div style={{ textAlign: "center" }}>
      {!diceClicked ? (
        isMobile ? (
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
              najdeš v levém menu spolu s výsledkem hodu, nebo můžeš použít
              kostku níže.
            </p>
            <Dice diceRoll={diceRoll} setDiceRoll={setDiceRoll} />
          </div>
        ) : (
          <p
            style={{
              margin: "20px",
              fontSize: "1.8rem",
              fontStyle: "italic",
            }}>
            Teď je čas hodit si kostkou a určit svou sílu. Síla ti bude při
            některých rozhodnutích ubývat, proto jednej s rozvahou.
          </p>
        )
      ) : (
        children
      )}
    </div>
  );
};
