import React from "react";
import Image from "../Image";

const DealerHoleCards = ({ dealerCards }) => {
  return dealerCards.map((card, index) => (
    <div key={index}>
      <Image card={card} key={card.image} />
    </div>
  ));
};

export default DealerHoleCards;
