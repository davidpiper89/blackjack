import React, { useEffect, useState, useMemo, useCallback } from "react";
import { deck } from "./utils/deck";
import { beginGame } from "./utils/beginGame";
import Result from "./components/Result";
import DealerInterface from "./components/dealer/DealerInterface";
import PlayerInterface from "./components/player/PlayerInterface";
import "./App.css";

const App = () => {
  const deckStart = useMemo(() => [...deck], []);
  const [bet, setBet] = useState(false);
  const [playerCards, setPlayerCards] = useState([[]]);
  const [remainingDeck, setDeck] = useState();
  const [dealerCards, setDealerCards] = useState();
  const [dealerHidden, setDealerHidden] = useState();
  const [split, setSplit] = useState(0);

  const [chips, setChips] = useState(100);
  const [stake, setStake] = useState([[0], [0], [0], [0]]);
  const [total, setTotal] = useState([false, false, false, false]);
  const [bust, setBust] = useState([false, false, false, false]);
  const [blackjack, setBlackjack] = useState([false]);

  const [dealerTotal, setDealerTotal] = useState([0]);

  const resetGame = useCallback(() => {
    const start = beginGame(deckStart);
    setPlayerCards([start.playerCards]);
    setDeck(start.currentDeck);
    setDealerCards(start.dealerCards);
    setDealerHidden(start.dealerHidden);
    setSplit(0);
    setTotal([false, false, false, false]);
    setBust([false, false, false, false]);
    setStake([[0], [0], [0], [0]]);
    setBlackjack([false]);
    setDealerTotal([0]);
    setBet(false);
  }, [deckStart]);

  useEffect(() => {
    const start = beginGame(deckStart);
    setPlayerCards([start.playerCards]);
    setDeck(start.currentDeck);
    setDealerCards(start.dealerCards);
    setDealerHidden(start.dealerHidden);
  }, [deckStart]);

  return (
    <>
      <div
        fluid="true"
        className="d-flex flex-column align-items-center mediaContainer"
      >
        <header>
          <h1>Piper's BlackJack</h1>
        </header>

        <>
          <DealerInterface
            dealerCards={dealerCards}
            dealerHidden={dealerHidden}
            remainingDeck={remainingDeck}
            setDealerCards={setDealerCards}
            setDeck={setDeck}
            dealerTotal={dealerTotal}
            setDealerTotal={setDealerTotal}
            bet={bet}
          />
          <PlayerInterface
            playerCards={playerCards}
            remainingDeck={remainingDeck}
            setPlayerCards={setPlayerCards}
            setDeck={setDeck}
            split={split}
            setSplit={setSplit}
            deckStart={deckStart}
            setDealerCards={setDealerCards}
            setDealerHidden={setDealerHidden}
            chips={chips}
            setChips={setChips}
            stake={stake}
            setStake={setStake}
            total={total}
            setTotal={setTotal}
            blackjack={blackjack}
            setBlackjack={setBlackjack}
            bust={bust}
            setBust={setBust}
            resetGame={resetGame}
            bet={bet}
            setBet={setBet}
          />
        </>
        <Result
          total={total}
          dealerTotal={dealerTotal}
          resetGame={resetGame}
          setBet={setBet}
        />
        <footer></footer>
      </div>
    </>
  );
};

export default App;
