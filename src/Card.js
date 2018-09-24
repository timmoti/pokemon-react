import React from "react";
const checkType = ({ type }) => {
  const colors = {
    fire: "#fe7500",
    water: "#6a87f3",
    grass: "#53d34e",
    thunder: "#e3c260",
    psychic: "#ff2482",
    ice: "#b282f2"
  };
  let chosenColor = "";
  for (let key in colors) {
    if (key === type) {
      chosenColor = key;
    }
  }
  return colors[chosenColor];
};

const Card = ({ pokemon }) => {
  return (
    <div
      className="listItem"
      style={{ "backgroundColor": checkType(pokemon) }}
    >
      <img src={pokemon.image} alt={pokemon.image} />
      <h3 className="listItem__name">{pokemon.name}</h3>
      <h3 className="listItem__name">
        Pokemon Type:{" "}
        {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}
      </h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">{pokemon.price}</div>
      </div>
    </div>
  );
};

export default Card;
