import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { story } from "./story";
import "./GameBook.css";
import { Fight } from "./Fight";

export const GameBook = ({
  userName,
  endStory,
  setCurrentPartId,
  currentPartId,
  diceRoll,
  setDiceRoll,
}) => {
  const storyTopRef = React.useRef(null);
  const [showMinusStrength, setShowMinusStrength] = React.useState(false);
  const currentPart = story[currentPartId];

  const goToNextPart = (id) => {
    if (["checkTheClock", "goHome", "whiskey", "checkTheClock2"].includes(id)) {
      setShowMinusStrength(true);
      setDiceRoll((prev) => Math.max(prev - 1, 0));
      setTimeout(() => setShowMinusStrength(false), 3000);
      const audio = new Audio("/sounds/minus-strenght.mp3");
      audio.play();
    }
    if (id === "again") {
      return endStory();
    }

    setCurrentPartId(id);

    setTimeout(() => {
      storyTopRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (currentPartId === "fight") {
    return (
      <div className="story_text" ref={storyTopRef}>
        {currentPart.text}
        <Fight
          userName={userName}
          diceRoll={diceRoll}
          goToNextPart={goToNextPart}
        />
      </div>
    );
  }
  return (
    <div className="story_text" ref={storyTopRef}>
      {currentPart.text}

      <div className="buttons">
        <AnimatePresence>
          {showMinusStrength && (
            <motion.div
              className="minus_strength"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 7 }}>
              –1 síla
            </motion.div>
          )}
        </AnimatePresence>

        {currentPart.options.map((option, id) => (
          <button
            className="btn"
            key={id}
            onClick={() => goToNextPart(option.id)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};
