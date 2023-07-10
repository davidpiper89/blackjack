import React from "react";

const ResultsModal = ({ resetGame, setBet }) => {
  const handleRestartGame = () => {
    resetGame();
    setBet(false);
  };

  return (
    <div>
      ResultsModal
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default ResultsModal;
