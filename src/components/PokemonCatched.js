import React, { Component } from "react";
import "./styles/PokemonList.css";
import Modal from "./modal";
import swal from "sweetalert";

export const toCapitalLetter = name => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

class PokemonsCatched extends Component {
  handleClick = async () => {
    await this.props.actions.getPokemonsDetails(this.props.url);
  };

  handleThrowPokeball = () => {
    this.props.trainerData.ownPokemons.catched.length <= 5
      ? this.props.actions.catchPokemon(this.props.name, this.props.url)
      : swal(
          "Oops",
          "Hey trainer!, remember you only have 6 pokeballs",
          "error"
        );
  };

  render() {
    const { name, url, details } = this.props;
    const id = url.split("/")[url.split("/").length - 2];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?raw=true`;
    return (
      <div className="col-md-4 mb-4">
        <li className="BadgesListItem">
          <div className="">
            <img
              src={sprite}
              alt={`${name} sprite`}
              className="BadgesListItem__avatar"
            />
          </div>
          <div>
            <h5 className="name">{toCapitalLetter(name)}</h5>
            <span className="description">
              <p>
                To get all details of this Pokemon click on details 
              </p>
            </span>
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={this.handleClick}
                data-toggle="modal"
                data-target="#detailsModal"
              >
                Details
              </button>
            </div>
            <Modal details={details} />
          </div>
        </li>
      </div>
    );
  }
}

export default PokemonsCatched;
