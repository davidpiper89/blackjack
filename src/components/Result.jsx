import React, { useState, useEffect } from "react";
import ResultsModal from "./ResultsModal";

const Result = ({
  total,
  dealerTotal,
  resetGame,
  setBet,
  dealerEnd,
  playerEnd,
  playerCards,
  dealerCards,
  setChips,
  stake,
  setWins,
  setLoses,
  setDraws,
  chips,
  UID,
}) => {
  const result = { win: "You win", lose: "You lose", draw: "Push" };
  const [outcome, setOutcome] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const determineHandOutcome = (
    handTotal,
    dealerTotal,
    stakeForHand,
    playerCards,
    dealerCards
  ) => {
    const isPlayerBlackJack = playerCards[0].length === 2 && handTotal === 21;
    const isDealerBlackJack = dealerCards.length === 2 && dealerTotal === 21;

    if (handTotal > 21) {
      return { result: result.lose, stakeResult: -stakeForHand };
    } else if (isDealerBlackJack && isPlayerBlackJack) {
      return { result: result.draw, stakeResult: stakeForHand };
    } else if (isPlayerBlackJack && !isDealerBlackJack) {
      return { result: result.win, stakeResult: 2.5 * stakeForHand };
    } else if (dealerTotal === handTotal) {
      return { result: result.draw, stakeResult: stakeForHand };
    } else if (dealerTotal > 21 || handTotal > dealerTotal) {
      return { result: result.win, stakeResult: stakeForHand };
    } else if (isDealerBlackJack || dealerTotal > handTotal) {
      return { result: result.lose, stakeResult: -stakeForHand };
    }
  };

  useEffect(() => {
    const newOutcome = [...outcome];
    for (let i = 0; i < 4; i++) {
      if (total[i] !== false) {
        const handOutcome = determineHandOutcome(
          total[i],
          dealerTotal[0],
          stake[i],
          playerCards[i],
          dealerCards
        );
        if (handOutcome) {
          newOutcome[i] = handOutcome;

          // Adjust chips based on the outcome
          if (handOutcome.result === result.win) {
            setChips((prevChips) => prevChips + handOutcome.stakeResult * 2);
          } else if (handOutcome.result === result.draw) {
            setChips((prevChips) => prevChips + handOutcome.stakeResult);
          }
        }
      }
    }
    setOutcome(newOutcome);
  }, [dealerEnd]);

  useEffect(() => {
    outcome.forEach((outcomeResult) => {
      if (outcomeResult.result === result.lose) {
        setLoses((prevLoses) => prevLoses + 1);
      } else if (outcomeResult.result === result.win) {
        setWins((prevWins) => prevWins + 1);
      } else if (outcomeResult.result === result.draw) {
        setDraws((prevDraws) => prevDraws + 1);
      }
    });
  }, [outcome]);

  useEffect(() => {
    let timer;
    if (outcome.length > 0 && playerEnd) {
      timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [outcome]);

  const handleResetOutcome = () => {
    setOutcome([]);
    setShowModal(false);
  };

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
