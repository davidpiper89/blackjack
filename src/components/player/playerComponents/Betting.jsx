import React from "react";
import { useDispatch } from "react-redux";
import { setPlayerBet } from "../../../features/blackjackSlice";

const Betting = ({ setBet, bet, setChips, chips, stake, setStake }) => {

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() => setStake([[stake[0][0] + 1], ...stake.slice(1)])}
        >
          Bet 1
        </button>
        <button
          onClick={() => setStake([[stake[0][0] + 5], ...stake.slice(1)])}
        >
          Bet 5
        </button>
        <button
          onClick={() => setStake([[stake[0][0] + 10], ...stake.slice(1)])}
        >
          Bet 10
        </button>
      </div>
      <div>Total bet : {stake[0][0]}</div>

      <button
        onClick={() => {
          if (stake[0][0] > 0) {
            setBet(!bet);
            setChips(chips - stake[0][0]);
            dispatch(setPlayerBet());
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
