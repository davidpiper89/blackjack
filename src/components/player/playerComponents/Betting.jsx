import React from "react";

const Betting = ({ setBet, bet, setChips, chips, stake, setStake }) => {
  return (
    <>
      <div>
        <button
          className="bet-button"
          onClick={() => setStake([[stake[0][0] + 1], ...stake.slice(1)])}
        >
          Bet 1
        </button>
        <button
          className="bet-button"
          onClick={() => setStake([[stake[0][0] + 5], ...stake.slice(1)])}
        >
          Bet 5
        </button>
        <button
          className="bet-button"
          onClick={() => setStake([[stake[0][0] + 10], ...stake.slice(1)])}
        >
          Bet 10
        </button>
      </div>
      <div className="bet-text">Total bet : {stake[0][0]}</div>

      <button
        className="confirm-button"
        onClick={() => {
          if (stake[0][0] > 0) {
            setBet(!bet);
            setChips(chips - stake[0][0]);
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
