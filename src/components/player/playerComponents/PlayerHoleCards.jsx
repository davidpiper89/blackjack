import React from "react";
import Image from "../../Image";

const PlayerHoleCards = ({ hand, gridClass }) => {

  return hand.map((card, index) => (
    <div key={index} className={`player-card${gridClass}`}>
      <Image card={card} key={card.image} />
    </div>
  ));
};

export default PlayerHoleCards;
