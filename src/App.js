import React, { Component } from "react";
import Card from "./Card";

const pokemon = {
  name: "Charmander",
  type: "fire",
  price: 20,
  image: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
};

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <Card pokemon={pokemon} />
        </div>
      </div>
    );
  }
}

export default App;
