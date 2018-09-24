import React, { Component } from "react";
import Card from "./Card";
import { getPokemons } from "./pokemonData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: getPokemons(),
      keyword: ""
    };
  }

  handleInputChange(event) {
    this.setState({
      keyword: event.target.value.toLowerCase()
    });
  }

  render() {
    const { keyword, pokemons } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      const name = pokemon.name.toLowerCase();
      return name.indexOf(keyword) > -1;
    });
    return (
      <div className="wrapper">
        <div className="filterInput">
          <input
            type="text"
            value={keyword}
            onChange={this.handleInputChange.bind(this)}
            placeholder="Search your Pokedex!"
          />
        </div>

        <div className="list">
          {filteredPokemons.length > 0 &&
            filteredPokemons.map(pokemon => {
              return <Card pokemon={pokemon} />;
            })}

          {filteredPokemons.length === 0 && (
            <div className="list-empty">
              <p>Oops! We don't have the pokemon you are looking for!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
