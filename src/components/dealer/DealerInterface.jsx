import React, { useEffect, useState, useCallback } from "react";
import DealerHoleCards from "./DealerHoleCards";
import Total from "../Total";
import { RandomCardPicker } from "../../utils/RandomCardPicker";
import "./Dealer.css";

const DealerInterface = ({
  dealerCards,
  dealerHidden,
  remainingDeck,
  setDeck,
  setDealerCards,
  dealerTotal,
  setDealerTotal,
  bet,
  playerEnd,
  setDealerEnd,
  bust,
  split,
  blackjack,
}) => {
  const playerBusted = bust.slice(0, split + 1).every((bust) => bust);
  const playerAllHandsBlackJack = blackjack
    .slice(0, split + 1)
    .every((blackjack) => blackjack);

  const dealerFirstCard = (cards) => {
    if (!cards) {
      return;
    } else if (cards) return cards[0].value;
  };
  const dealerShowTenOrAce = dealerFirstCard(dealerCards);

  useEffect(() => {
    if (!playerBusted) {
      const timeoutId = setTimeout(() => {
        if (playerAllHandsBlackJack && dealerShowTenOrAce) {
          const newDealerCards = [...dealerCards, dealerHidden[0]];
          setDealerCards(newDealerCards);
        } else if (
          playerEnd &&
          dealerHidden &&
          !dealerCards.includes(dealerHidden[0])
        ) {
          const newDealerCards = [...dealerCards, dealerHidden[0]];
          setDealerCards(newDealerCards);
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [
    playerEnd,
    dealerHidden,
    setDealerCards,
    playerBusted,
    playerAllHandsBlackJack,
  ]);

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
    if (playerBusted) {
      setDealerEnd(true);
      return;
    } else if (
      dealerCards &&
      dealerCards.length >= 2 &&
      dealerTotal < 17 &&
      !playerAllHandsBlackJack
    ) {
      const timeoutId = setTimeout(() => {
        dealerDraw(remainingDeck);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else if (
      dealerCards &&
      dealerCards.length === 2 &&
      playerAllHandsBlackJack
    ) {
      setDealerEnd(true);
    } else if (playerEnd && dealerTotal >= 17) {
      setDealerEnd(true);
    }
  }, [
    dealerCards,
    remainingDeck,
    dealerTotal,
    dealerDraw,
    playerEnd,
    setDealerEnd,
  ]);

  return (
    <>
      {!bet ? (
        ""
      ) : (
        <div data-testid="dealer-interface">
          <div className="d-flex justify-content-center align-items-center">
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
