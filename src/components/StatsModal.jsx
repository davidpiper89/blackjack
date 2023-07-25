import React from "react";
import Modal from "react-bootstrap/Modal";

const StatsModal = ({ setShowStats, wins, loses, draws }) => {
  const hands = wins + loses + draws;
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <p>Hands:{hands}</p>
      <p>Wins:{wins}</p>
      <p>Loses:{loses}</p>
      <p>Draws:{draws}</p>
      <button
        onClick={() => {
          setShowStats(false);
        }}
      >
        X
      </button>
    </Modal>
  );
};

export default StatsModal;
