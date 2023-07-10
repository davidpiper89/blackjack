import React, { useEffect, useState, useCallback } from "react";
import DealerHoleCards from "./DealerHoleCards";
import { useSelector } from "react-redux";
import Total from "../Total";
import { RandomCardPicker } from "../../utils/RandomCardPicker";

const DealerInterface = ({
  dealerCards,
  dealerHidden,
  remainingDeck,
  setDeck,
  setDealerCards,
  dealerTotal,
  setDealerTotal,
  bet
}) => {
  // const [end, setEnd] = useState(false)

  const playerEnd = useSelector((state) => state.blackjack.completeTurn);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (playerEnd && !dealerCards.includes(dealerHidden[0])) {
        const newDealerCards = [...dealerCards, dealerHidden[0]];
        setDealerCards(newDealerCards);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [playerEnd, dealerCards, dealerHidden, setDealerCards]);

  const dealerDraw = useCallback(
    (remainingDeck) => {
      const newCard = RandomCardPicker(remainingDeck);
      const newCards = [...dealerCards, newCard.card];

      setDealerCards(newCards);
      setDeck(newCard.array);
    },
    [dealerCards, setDealerCards, setDeck]
  ); 

  useEffect(() => {
    if (dealerCards && dealerCards.length >= 2 && dealerTotal < 17) {
      const timeoutId = setTimeout(() => {
        dealerDraw(remainingDeck);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [dealerCards, remainingDeck, dealerTotal, dealerDraw]); 

  return (
    <>
      {!bet ? (
        ""
      ) : (
        <div>
          <div className="d-flex justify-content-center align-items-center cards-container">
            <DealerHoleCards dealerCards={dealerCards} />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Total
              hand={dealerCards}
              handIndex={0}
              total={dealerTotal}
              setTotal={setDealerTotal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DealerInterface;
