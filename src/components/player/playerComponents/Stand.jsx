import React from "react";


const Stand = ({ handIndex, playerCards, stand, setStand }) => {


  const handleStand = (index) => {
    let updatedStand = [...stand];
    updatedStand[index] = true;
    setStand(updatedStand);
  };

  return <button className="standButton" onClick={() => handleStand(handIndex)}>Stand</button>;
};

export default Stand;
