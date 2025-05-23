import React from "react";
import { useMediaQuery } from "react-responsive";
import { Dice } from "./Dice";

export const AvoidCheating = ({
  diceClicked,
  setDiceClicked,
  diceRoll,
  setDiceRoll,
  children,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 797px)" });

  return (
    <div style={{ textAlign: "center" }}>
      {!diceClicked ? (
        isMobile ? (
          <div>
            <h2
              style={{
                marginBottom: "20px",
                fontWeight: "inherit",
                fontSize: "1.2rem",
                fontStyle: "italic",
              }}>
              Teď je čas hodit si kostkou a určit svou sílu. Kostku najdeš v
              levém menu spolu s výsledkem hodu, nebo můžeš použít kostku níže.
            </h2>
            <Dice
              diceClicked={diceClicked}
              setDiceClicked={setDiceClicked}
              diceRoll={diceRoll}
              setDiceRoll={setDiceRoll}
            />
          </div>
        ) : (
          <h2 style={{ marginBottom: "20px" }}>
            Nejdříve si hoď kostkou v levém panelu pro určení své síly
          </h2>
        )
      ) : (
        children
      )}
    </div>
  );
};
