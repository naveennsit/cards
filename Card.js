import React from 'react';
import './card.css';

const Card = props => {
  return React.createElement("div", {
    className: "card2"
  }, props.children);
};

export default Card;
