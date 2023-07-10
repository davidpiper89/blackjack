import React, { useEffect, useState } from "react";
import Betting from "./playerComponents/Betting";
import PlayerHoleCards from "./playerComponents/PlayerHoleCards";
import Chips from "./playerComponents/Chips";
import Hit from "./playerComponents/Hit";
import Stand from "./playerComponents/Stand";
import Double from "./playerComponents/Double";
import Split from "./playerComponents/Split";
import Total from "../Total";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerCompleteTurn } from "../../features/blackjackSlice";
import Bet from "./playerComponents/Bet";
import "./Player.css";

const PlayerInterface = ({
  playerCards,
  remainingDeck,
  setPlayerCards,
  setDeck,
  split,
  setSplit,
  chips,
  setChips,
  stake,
  setStake,
  total,
  setTotal,
  blackjack,
  setBlackjack,
  bust,
  setBust,
  resetGame,
  bet,
  setBet
}) => {

  const [stand, setStand] = useState([false, false, false, false]);
  const [double, setDouble] = useState([false, false, false, false]);

  const turnOver = useSelector((state) => state.blackjack.completeTurn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!turnOver && playerCards.length > 0 && playerCards.length <= 4) {
      let allHandsOver = playerCards.every(
        (_, index) =>
          stand[index] ||
          (double[index] && total[index] <= 21) ||
          blackjack[index] ||
          total[index] === 21
      );

      if (allHandsOver) {
        dispatch(setPlayerCompleteTurn(true));
      }
    }
  }, [playerCards, turnOver, stand, double, bust, blackjack, total, dispatch]);

  const PlayerHandsDisplay = () => {
    return playerCards.map((hands, handIndex) => {
      return hands.map((hand) => {
        const canSplit =
          hand.length === 2 && hand[0].value === hand[1].value && split < 3;

        const showControls =
          bet &&
          !stand[handIndex] &&
          !double[handIndex] &&
          !bust[handIndex] &&
          !blackjack[handIndex] &&
          total[handIndex] !== 21 &&
          total[handIndex] < 21;

        return (
          <div key={handIndex}>
            <div className="d-flex justify-content-center align-items-center cards-container">
              <PlayerHoleCards hand={hand} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Total
                hand={hand}
                handIndex={handIndex}
                bust={bust}
                setBust={setBust}
                blackjack={blackjack}
                setBlackjack={setBlackjack}
                total={total}
                setTotal={setTotal}
              />
              <Bet
                hand={hand}
                handIndex={handIndex}
                stake={stake}
                setStake={setStake}
              />
              {showControls && (
                <div>
                  <Hit
                    remainingDeck={remainingDeck}
                    setDeck={setDeck}
                    setPlayerCards={setPlayerCards}
                    handIndex={handIndex}
                    playerCards={playerCards}
                  />
                  <Stand
                    handIndex={handIndex}
                    playerCards={playerCards}
                    stand={stand}
                    setStand={setStand}
                  />
                  {hand && hand.length < 3 && (
                    <Double
                      remainingDeck={remainingDeck}
                      setDeck={setDeck}
                      playerCards={playerCards}
                      setPlayerCards={setPlayerCards}
                      handIndex={handIndex}
                      double={double}
                      setDouble={setDouble}
                      stake={stake}
                      setStake={setStake}
                      chips={chips}
                      setChips={setChips}
                      setTotal={setTotal}
                    />
                  )}
                  {canSplit && (
                    <Split
                      remainingDeck={remainingDeck}
                      setDeck={setDeck}
                      setPlayerCards={setPlayerCards}
                      hand={hand}
                      playerCards={playerCards}
                      handIndex={handIndex}
                      split={split}
                      setSplit={setSplit}
                      stake={stake}
                      setStake={setStake}
                      chips={chips}
                      setChips={setChips}
                      blackjack={blackjack}
                      setBlackjack={setBlackjack}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        );
      });
    });
  };

  return (
    <>
      {!bet && (
        <Betting
          setBet={setBet}
          bet={bet}
          setChips={setChips}
          chips={chips}
          stake={stake}
          setStake={setStake}
        />
      )}
      <div className="d-flex">{bet && <PlayerHandsDisplay />}</div>
      <Chips chips={chips} />
    </>
  );
};

export default PlayerInterface;
