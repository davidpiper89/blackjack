import React from "react";
import Modal from "react-bootstrap/Modal";

const StatsModal = ({ setShowStats, wins, loses, draws }) => {
  return (
    <Modal
      show={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <p>wins:{wins}</p>
      <p>loses:{loses}</p>
      <p>draws:{draws}</p>
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
