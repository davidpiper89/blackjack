import React from "react";
import { RandomCardPicker } from "../../../utils/RandomCardPicker";

const Hit = ({
  remainingDeck,
  setDeck,
  setPlayerCards,
  handIndex,
  playerCards,
}) => {
  const handleHit = (remainingDeck) => {
    const hit = RandomCardPicker(remainingDeck);
    const newPlayerCards = [...playerCards];

    newPlayerCards[handIndex][0].push(hit.card);

    setPlayerCards(newPlayerCards);
    setDeck(hit.array);
  };

  return <button className="hitButton" onClick={() => handleHit(remainingDeck)}>Hit</button>;
};

export default Hit;
