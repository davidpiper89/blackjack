import React from "react";
import { RandomCardPicker } from "../../../utils/RandomCardPicker";

const Split = ({
  remainingDeck,
  setDeck,
  setPlayerCards,
  playerCards,
  handIndex,
  split,
  setSplit,
  stake,
  setStake,
  chips,
  setChips,
  blackjack,
  setBlackjack,
}) => {
  const splitHand = (index) => {
    if (playerCards.length >= 1 && playerCards.length < 4) {
      const draw1 = RandomCardPicker(remainingDeck);
      const draw2 = RandomCardPicker(draw1.array);

      let split1 = playerCards[index][0][0];
      let split2 = playerCards[index][0][1];

      const newHand1 = [split1, draw1.card];
      const newHand2 = [split2, draw2.card];

      const newPlayerCards = [...playerCards];
      newPlayerCards.splice(index, 1, [newHand1], [newHand2]);

      setPlayerCards(newPlayerCards);
      setDeck(draw2.array);

      const newStake = [...stake];
      newStake.splice(index + 1, 0, [stake[index][0]]);
      setStake(newStake);

      const newBlackjack = [...blackjack];
      newBlackjack.splice(index + 1, 0, false);
      setBlackjack(newBlackjack);

      setChips(chips - stake[index][0]);
    }
  };

  return (
    <button
      className="splitButton"
      onClick={() => {
        splitHand(handIndex);
        setSplit(split + 1);
      }}
    >
      Split
    </button>
  );
};

export default Split;
