import React from "react";
import { RandomCardPicker } from "../../../utils/RandomCardPicker";

const Double = ({
  remainingDeck,
  setDeck,
  playerCards,
  setPlayerCards,
  handIndex,
  double,
  setDouble,
  stake,
  setStake,
  chips,
  setChips,
  setTotal
}) => {
  const handleDouble = (remainingDeck, index) => {
    const hit = RandomCardPicker(remainingDeck);
    const newPlayerCards = [...playerCards];
    newPlayerCards[handIndex][0].push(hit.card);

    setPlayerCards(newPlayerCards);
    setDeck(hit.array);

    const newStake = [...stake];
    newStake[index][0] *= 2;
    setStake(newStake);
    setChips(chips - newStake[index][0] / 2);

    setDouble((prevState) => {
      let updatedDouble = [...prevState];
      updatedDouble[index] = true;
      return updatedDouble;
    });

    setTotal((prevState) => {
      const newTotal = [...prevState];
    
      newTotal[handIndex] += hit.card.value;
      return newTotal;
    });
  };

  return (
    <button className="doubleButton"
      onClick={() => {
        handleDouble(remainingDeck, handIndex);
      }}
    >
      Double
    </button>
  );
};

export default Double;
