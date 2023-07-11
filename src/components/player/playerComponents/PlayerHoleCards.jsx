import React from "react";
import Image from "../../Image";

const PlayerHoleCards = ({ hand }) => {

  return hand.map((card, index) => (
    <div key={index} className="player-card">
      <Image card={card} key={card.image} />
    </div>
  ));
};

export default PlayerHoleCards;
