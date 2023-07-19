import React from "react";
import Modal from "react-bootstrap/Modal";

const ResultsModal = ({ resetGame, setBet, resetOutcome, results }) => {
  const handleRestartGame = () => {
    resetGame();
    setBet(false);
    resetOutcome();
  };


  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {results.map((result, index) => (
        <p key={index}>
          Hand {index + 1}: {result}
        </p>
      ))}
      <button onClick={handleRestartGame}>Play Again?</button>
    </Modal>
  );
};

export default ResultsModal;
