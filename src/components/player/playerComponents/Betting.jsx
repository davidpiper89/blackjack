import React, { useState } from "react";
import { deck } from "../../../utils/deck";
import { beginGame } from "../../../utils/beginGame";

const Betting = ({
  setBet,
  bet,
  setChips,
  chips,
  stake,
  setStake,
  setPlayerCards,
  setDeck,
  setDealerCards,
  setDealerHidden,
}) => {
  const [customBet, setCustomBet] = useState("");

  const placeBet = (amount) => {
    const betAmount = amount === "custom" ? customBet : amount;
    if (stake[0] + betAmount > chips) {
      console.log(stake[0], betAmount, chips);
      alert("You cannot bet more than your available chips.");
      return;
    }
    setStake([stake[0] + betAmount, ...stake.slice(1)]);
  };

  const undoBet = () => {
    setStake([0, ...stake.slice(1)]);
  };
  const handleBeginGame = () => {
    const start = beginGame([...deck]);
    setPlayerCards([start.playerCards]);
    setDeck(start.currentDeck);
    setDealerCards(start.dealerCards);
    setDealerHidden(start.dealerHidden);
  };

  const handleCustomBetChange = (e) => {
    const betValue = Math.min(Math.max(0, e.target.value), chips);
    setCustomBet(betValue);
  };

  return (
    <>
      <div className="bettingContainer">
        <div className="setBetOptions">
          <button className="betButton" onClick={() => placeBet(5)}>
            Bet 5
          </button>
          <button className="betButton" onClick={() => placeBet(10)}>
            Bet 10
          </button>
        </div>
        <div>
          <input
            type="number"
            value={customBet}
            onChange={handleCustomBetChange}
            placeholder="Custom Bet"
            className="customBetInput"
          />
          <button className="betButton" onClick={() => placeBet("custom")}>
            Place Custom Bet
          </button>
        </div>
        <button className="betButton" onClick={undoBet}>
          Clear
        </button>
      </div>
      <div className="betText">Total bet : {stake[0]}</div>

      <button
        className="confirmButton"
        onClick={() => {
          if (stake[0] > 0) {
            setBet(!bet);
            setChips(chips - stake[0]);
            handleBeginGame();
          } else {
            alert("Please place a bet before starting the game.");
          }
        }}
      >
        Confirm Bet
      </button>
    </>
  );
};

export default Betting;
