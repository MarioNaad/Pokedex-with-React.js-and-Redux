import React, { Component } from "react";
import "./styles/PokemonList.css";
import PokemonCatched from "./PokemonCatched";

class PokemonList extends Component {
 
  render() {
    return (
      <div className="BadgesList" id="pokemon-list">
        <div className="Badges__container">
          <ul className="list-unstyled">
            <div className="row">
              {this.props.trainerData.ownPokemons.catched.map((pokemon, index) => {
                return (
                  <PokemonCatched
                    key={index}
                    name={pokemon.name}
                    url={pokemon.url}
                    details={this.props.data.details}
                    trainerData={this.props.trainerData}
                    actions={this.props.actions}
                  />
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonList;
