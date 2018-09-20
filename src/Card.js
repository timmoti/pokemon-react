import React from "react";

const Card = () => {
  return (
    <div className="listItem">
      <img/>
      <h3 className="listItem__name"></h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt"></div>
      </div>
      <div className="listItem__addButton"></div>
    </div>
  );
};

export default Card;
