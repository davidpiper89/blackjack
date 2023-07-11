import React, { useState, useEffect } from "react";
import ResultsModal from "./ResultsModal";

const Result = ({
  total,
  dealerTotal,
  resetGame,
  setBet,
  dealerEnd,
  playerCards,
  dealerCards,
}) => {
  const result = { win: "You win", lose: "You lose", draw: "Push" };
  const [outcome, setOutcome] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleResetOutcome = () => {
    setOutcome([]);
    setShowModal(false);
  };

  useEffect(() => {
    let timer;
    if (outcome.length > 0) {
      timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [outcome]);

  useEffect(() => {
    let newOutcome = [...outcome];
    for (let i = 0; i < 4; i++) {
      if (total[i] !== false) {
        const isPlayerBlackJack =
          playerCards[i][0].length === 2 && total[i] === 21;
        const isDealerBlackJack =
          dealerCards[0].length === 2 && dealerTotal[0] === 21;

        if (total[i] > 21) {
          newOutcome[i] = result.lose;
        } else if (dealerTotal[0] === total[i] && dealerEnd) {
          newOutcome[i] = result.draw;
        } else if (dealerEnd) {
          if (
            isPlayerBlackJack ||
            total[i] > dealerTotal[0] ||
            dealerTotal[0] > 21
          ) {
            newOutcome[i] = result.win;
          } else if (isDealerBlackJack || dealerTotal[0] > total[i]) {
            newOutcome[i] = result.lose;
          }
        }
      }
    }
    setOutcome(newOutcome);
  }, [dealerEnd, total]); // Watch both dealerEnd and total

  return showModal ? (
    <ResultsModal
      resetGame={resetGame}
      setBet={setBet}
      resetOutcome={handleResetOutcome}
      results={outcome}
    />
  ) : null;
};

export default Result;
