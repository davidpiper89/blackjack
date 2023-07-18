import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const InfoButton = () => {
  return (
    <button className="info-button">
      <FontAwesomeIcon icon={faInfoCircle} />
    </button>
  );
}

export default InfoButton;
