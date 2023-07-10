import React from "react";

const Bet = ({ hand, handIndex, stake, setStake }) => {
  return <div>Bet: {stake[handIndex]}</div>;
};

export default Bet;
