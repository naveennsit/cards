import React from 'react';
import './card.css';

const Card = props => {
  return React.createElement("div", {
    className: "card3"
  }, props.children);
};

export default Card;
