import React, { Component } from "react";
import "./styles/PokemonList.css";
import PokemonListItem from "./PokemonListItem";

class PokemonList extends Component {
 
  render() {
    return (
      <div className="BadgesList">
        <div className="Badges__container">
          <ul className="list-unstyled">
            <div className="row">
              {this.props.data.pokemons.map((pokemon, index) => {
                return (
                  <PokemonListItem
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
