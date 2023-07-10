import React, { useEffect } from "react";
import ResultsModal from "./ResultsModal";

const Result = ({ total, dealerTotal, resetGame, setBet }) => {
  console.log(total, dealerTotal);

  const falseCount = total.filter((val) => val === false).length;

  if (falseCount === 3) {
    if (total[0] > 21) {
      return <ResultsModal resetGame={resetGame} setBet={setBet} />;
    }
  }

  return;

  // useEffect(() => {
  //   if (handTotal > 21 && !bust[handIndex]) {
  //     let updatedBust = [...bust];
  //     updatedBust[handIndex] = true;
  //     setBust(updatedBust);
  //   }
  // }, [handTotal, setBust, bust, handIndex]);

  // useEffect(() => {
  //   if (hand.length === 2 && handTotal === 21 && !blackjack[handIndex]) {
  //     let updatedBlackjack = [...blackjack];
  //     updatedBlackjack[handIndex] = true;
  //     setBlackjack(updatedBlackjack);
  //   }
  // }, [hand, handTotal, blackjack, handIndex, setBlackjack]);

  // if (hand.length === 2 && handTotal === 21) {
  //   return <p>BlackJack</p>;
  // }
  // if (handTotal > 21) {
  //   return <p>Bust</p>;
  // }

  // return null;
};

export default Result;
