import React from "react";

const Image = ({ card }) => {
  return (
    <img
      src={`../../assets/${card.image}.svg`}
      alt="missing img"
      className="card-image"
    />
  );
};

export default Image;
