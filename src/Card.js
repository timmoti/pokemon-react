import React from "react";

const Card = props => {
  return (
    <div className="listItem">
      <h3>Images goes here</h3>
      <h3 className="listItem__name">Name goes here</h3>
      <h3 className="listItem__name">Type goes here</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">Price goes here</div>
      </div>
    </div>
  );
};

export default Card;
